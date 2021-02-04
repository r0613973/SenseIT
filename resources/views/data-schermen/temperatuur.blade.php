@extends('layouts.template')


@section('title', 'Temperatuur')
@section('main')





            <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">

                @include('data-schermen.datatemplate')
            </div>
    <div class="container">
        <div class="row" >
            <div class="col" id="mapframe">

            </div>
            <div class="col" >

            </div>
        </div>
    </div>



@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')

    <script>
        $(function() {
           $.getJSON('/maprequeset/5').done(data=>
           {
               console.log(data);
                $("#mapframe").append(  "<iframe></iframe>").children().attr("height", '500px').attr('width', '100%').attr('datum', data[2]).attr('id', 'terramap').attr('name','terramap').attr('lat', data[1]).attr('long', data[0]).attr('src','../assets/map.html');
           })
        });

        //const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
        //$('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');


    </script>
 @yield('script2')

   

@endsection
{{--@include('data-schermen.bottom-nav')--}}
