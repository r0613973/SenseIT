@extends('layouts.template')

@section('main')

    <ul class="mdc-image-list product-list">

    </ul>


    <img src="https://services.terrascope.be/wms/v2?service=WMS&version=1.3.0&request=GetMap&layers=CGS_S2_FAPAR&format=image/png&time=2021-01-10&width=1600&height=1000&bbox=514891.37560971221,6608042.8980626659,534913.75819381536,6639982.1872841949&styles=&srs=EPSG:3857" alt="">

@endsection
@section('script')
    <script src="https://cdn.jsdelivr.net/npm/axios@0.19/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@openeo/js-client@1/openeo.min.js"></script>
    <script>
        const MDCList= mdc.list.MDCList;
        new MDCList(document.querySelector('.mdc-list'));


        async function example() {
            // Connect to the back-end
            var con = await OpenEO.connect("https://openeo.vito.be/openeo/1.0");
            // Authenticate ourselves via Basic authentication
            await con.authenticateBasic("group11", "test123");
            // Create a process builder
            var builder = await con.buildProcess();
            // We are now loading the Sentinel-1 data over the Area of Interest
            var datacube = builder.load_collection(
                "COPERNICUS/S2_FAPAR",
                {west: 4.71528, south: 51.01528, east: 4.8951441235618871, north: 51.1957549410905},
                ["2017-03-01", "2017-06-01"],
                ["VV"]
            );

            // Since we are creating a monthly RGB composite, we need three separated time ranges (March aas R, April as G and May as G).
            // Therefore, we split the datacube into three datacubes using a temporal filter.
            var march = builder.filter_temporal(datacube, ["2017-03-01", "2017-04-01"]);
            var april = builder.filter_temporal(datacube, ["2017-04-01", "2017-05-01"]);
            var may = builder.filter_temporal(datacube, ["2017-05-01", "2017-06-01"]);

            // We aggregate the timeseries values into a single image by reducing the time dimension using a mean reducer.
            var mean = function(data) {
                return this.mean(data);
            };
            march = builder.reduce_dimension(march, mean, "t");
            april = builder.reduce_dimension(april, mean, "t");
            may = builder.reduce_dimension(may, mean, "t");

            // Now the three images will be combined into the temporal composite.
            // We rename the bands to R, G and B as otherwise the bands are overlapping and the merge process would fail.
            march = builder.rename_labels(march, "bands", ["R"], ["VV"]);
            april = builder.rename_labels(april, "bands", ["G"], ["VV"]);
            may = builder.rename_labels(may, "bands", ["B"], ["VV"]);

            datacube = builder.merge_cubes(march, april);
            datacube = builder.merge_cubes(datacube, may);

            // To make the values match the RGB values from 0 to 255 in a PNG file, we need to scale them.
            // We can simplify expressing math formulas using the openEO Formula parser.
            datacube = builder.apply(datacube, new Formula("linear_scale_range(x, -20, -5, 0, 255)"));

            // Finally, save the result as PNG file.
            // In the options we specify which band should be used for "red", "green" and "blue" color.
            datacube = builder.save_result(datacube, "PNG", {
                red: "R",
                green: "G",
                blue: "B"
            });

            // Now send the processing instructions to the back-end for (synchronous) execution and save the file as result.png
            await con.downloadResult(datacube, "result.png");
        }

        // Run the example, write errors to the console.
        example().catch(error => console.error(error));





    </script>
@endsection
