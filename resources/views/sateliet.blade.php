@extends('layouts.template')

@section('main')

    <ul class="mdc-image-list product-list">

    </ul>

    <div class="mdc-layout-grid__cell">

        <section class="map_box_container">

        <div id="map" ></div>

        </section>
    </div>
    <div class="mdc-layout-grid__cell">
        <div id="menu"></div>
    </div>

  <!--  <img src="https://services.terrascope.be/wms/v2?service=WMS&version=1.3.0&request=GetMap&layers=CGS_S2_FAPAR&format=image/png&time=2021-01-10&width=1600&height=1000&bbox=514891.37560971221,6608042.8980626659,534913.75819381536,6639982.1872841949&styles=&srs=EPSG:3857" alt="">-->

@endsection
@section('script')
    <script src="https://cdn.jsdelivr.net/npm/axios@0.19/dist/axios.min.js"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js'></script>
    <script>
        const MDCList= mdc.list.MDCList;
        new MDCList(document.querySelector('.mdc-list'));

        mapboxgl.accessToken = 'pk.eyJ1IjoicnViZW5saWUiLCJhIjoiY2syMjhubmkxMDY1ZzNpcGRpM21mcGVudCJ9.5Sd8sCupul110RJ2qRMcpg';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [4.7151, 51.01532],  // starting position [lng, lat]
            zoom: 16 // starting zoom
        });
        map.on('load', function () {
            map.addSource('wms-test-source', {
                'type': 'raster',
// use the tiles option to specify a WMS tile source URL
// https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/
                'tiles': [
                    //'https://services.terrascope.be/wmts/v2?layer=CGS_S2_FAPAR&style=&tilematrixset=EPSG:3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TileMatrix=EPSG:3857:6&TileCol=33&TileRow=21&TIME=2020-05-27'
                'https://services.terrascope.be/wms/v2?service=WMS&version=1.3.0&request=GetMap&layers=CGS_S2_FAPAR&format=image/png&time=2020-06-01&width=256&height=256&bbox={bbox-epsg-3857}&styles=&srs=EPSG:3857'
                ],
                'tileSize': 256
            });
            map.addLayer(
                {
                    'id': 'wms-test-layer',
                    'type': 'raster',
                    'source': 'wms-test-source',
                    'paint': {}
                },
                'aeroway-line'
            );
        });

        // enumerate ids of the layers
        var toggleableLayerIds = ['contours', 'museums'];

        // set up the corresponding toggle button for each layer
        for (var i = 0; i < toggleableLayerIds.length; i++) {
            var id = toggleableLayerIds[i];

            var link = document.createElement('a');
            link.href = '#';
            link.className = 'active';
            link.textContent = id;

            link.onclick = function (e) {
                var clickedLayer = this.textContent;
                e.preventDefault();
                e.stopPropagation();

                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

// toggle layer visibility by changing the layout object's visibility property
                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    this.className = '';
                } else {
                    this.className = 'active';
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }
            };

            var layers = document.getElementById('menu');
            layers.appendChild(link);
        }

        $('#modalID').on('shown.bs.modal', function() {
            map.resize();
        });



    </script>
@endsection
