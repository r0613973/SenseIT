@extends('layouts.template')


@section('title', 'sateliet')
@section('main')

<div class="container">
    <div class="row" style="padding-top: 15vh">
        <div class="col">

            <iframe src="assets/map.html" width="100%" height="700px"></iframe>


    </div></div>
</div>

    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">

    </div>



@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')
    <script>
        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>



    <script>
        document.onload()
        {
            console.log("test")
            httpGet()
        }
        function httpGet(theUrl)
        {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
            xmlHttp.send( null );
            return xmlHttp.responseText;
        }
        const MDCList= mdc.list.MDCList;
        new MDCList(document.querySelector('.mdc-list'));

    </script>
    <script>
        const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
    </script

@endsection
{{--@include('data-schermen.bottom-nav')--}}

