@extends('layouts.template')

@section('main')

        <ul class="mdc-image-list product-list">

        </ul>





@endsection
@section('script')
    <script>
       const MDCList= mdc.list.MDCList;
       new MDCList(document.querySelector('.mdc-list'));

    </script>
@endsection
