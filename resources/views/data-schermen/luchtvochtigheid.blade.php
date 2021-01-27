@extends('layouts.template')
@include('data-schermen.bottom-nav')
@section('title', 'Luchtvochtigheid')
@section('main')
    @include('data-schermen.datatemplate')

@endsection
@section('script')
    <script>

        $('#luchtvochtigheidIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
