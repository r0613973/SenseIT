@extends('layouts.template')
@include('data-schermen.bottom-nav')
@section('main')

    <h1>Zonlicht</h1>



@endsection

@section('script')
    <script>
        $('#zonlichtIcon').addClass("mdc-bottom-navigation__list-item--activated");

    </script>
@endsection
