@extends('layouts.template')


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
@include('data-schermen.bottom-nav')
