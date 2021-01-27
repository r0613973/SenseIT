@extends('layouts.template')
@include('data-schermen.bottom-nav')

@section('title', 'Temperatuur')
@section('main')
    @include('data-schermen.datatemplate')

@endsection

@section('script')
    <script>
        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>


    <script>
        const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
    </script

@endsection
