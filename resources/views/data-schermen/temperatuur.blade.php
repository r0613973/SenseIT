@extends('layouts.template')


@section('title', 'Temperatuur')
@section('main')

            <div class="mdc-layout-grid__cell">
    @include('data-schermen.datatemplate')

            </div>
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-middel">
    <iframe class="grafana" src="http://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?orgId=1&from=1611002140000&to=1611952540000&refresh=5s&panelId=4"
        width="100%" height="300px" frameborder="0"></iframe>
            </div>




@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>
        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>


    <script>
        const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
    </script

@endsection
{{--@include('data-schermen.bottom-nav')--}}
