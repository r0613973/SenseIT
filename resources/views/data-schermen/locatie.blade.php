@extends('layouts.template')
@include('data-schermen.bottom-nav')
@section('main')

<h1>Locatie</h1>



@endsection
@section('script')
    <script>
        $('#locatieIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
