@extends('layouts.template')


@section('title', 'sateliet')
@section('main')

<div class="container">
    <div class="row" style="padding-top: 15vh">
        <div class="col">

            <iframe src="assets/map.html" width="100%" height="700px"></iframe>


    </div></div>
</div>

    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">

    </div>



@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>
        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>


        <script src='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js'></script>
    <script>
        const MDCList= mdc.list.MDCList;
        new MDCList(document.querySelector('.mdc-list'));
        $('document').ready(function(){


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
        });
        map.on('load', function () {
            map.resize();
        });
    </script>
    <script>
        const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
    </script

@endsection
{{--@include('data-schermen.bottom-nav')--}}

