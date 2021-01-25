@extends('layouts.template')
@include('data-schermen.bottom-nav')
@section('main')

    <h1>Luchtkwaliteit</h1>



@endsection
@section('script')
    <script>

        $('#luchtkwaliteitIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
