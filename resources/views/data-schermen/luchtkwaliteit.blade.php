@extends('layouts.template')

@section('main')

    <h1>Luchtkwaliteit</h1>


    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>

        $('#luchtkwaliteitIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
