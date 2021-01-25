@extends('layouts.template')

@section('main')

    <h1>Zonlicht</h1>


    @include('data-schermen.bottom-nav')
@endsection

@section('script')
    <script>
        $('#zonlichtIcon').addClass("mdc-bottom-navigation__list-item--activated");

    </script>
@endsection
