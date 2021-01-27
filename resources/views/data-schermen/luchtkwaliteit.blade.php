@extends('layouts.template')
@include('data-schermen.bottom-nav')
@section('title', 'Luchtkwaliteit')
@section('main')
@include('data-schermen.datatemplate')

@endsection
@section('script')
    <script>

        $('#luchtkwaliteitIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>
@endsection
