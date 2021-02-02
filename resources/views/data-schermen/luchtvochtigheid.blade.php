@extends('layouts.template')

@section('title', 'Luchtvochtigheid')
@section('main')
    @include('data-schermen.datatemplate')

    <iframe class= "grafana" src="http://20.73.164.205:3000/d-solo/xIkhwMLGk/sensoren-metingen-dashboard?orgId=1&from=1611346257000&to=1611951057000&refresh=5s&panelId=5" width="600" height="500" frameborder="0"></iframe>
@endsection
@section('script')
    <script>

        $('#luchtvochtigheidIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
@include('data-schermen.bottom-nav')
