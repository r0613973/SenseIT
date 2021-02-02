@extends('layouts.template')


@section('title', 'Temperatuur')
@section('main')
    @include('data-schermen.datatemplate')
    @include('data-schermen.bottom-nav')


    <iframe class="grafana" src="http://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?orgId=1&from=1611002140000&to=1611952540000&refresh=5s&panelId=4"
        width="600" height="500" frameborder="0"></iframe>
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
