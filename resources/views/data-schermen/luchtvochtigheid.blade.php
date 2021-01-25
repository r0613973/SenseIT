@extends('layouts.template')

@section('main')

    <h1>Luchtvochtigheid</h1>


    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>

        $('#luchtvochtigheidIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
