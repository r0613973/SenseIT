@extends('layouts.template')

@section('main')

<h1>Locatie</h1>



@endsection
@section('script')
    <script>
        $('#locatieIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
@include('data-schermen.bottom-nav')
