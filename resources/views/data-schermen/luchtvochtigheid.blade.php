@extends('layouts.template')
@include('data-schermen.bottom-nav')
@section('main')

    <h1>Luchtvochtigheid</h1>



@endsection
@section('script')
    <script>

        $('#luchtvochtigheidIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
