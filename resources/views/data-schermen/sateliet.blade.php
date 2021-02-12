@extends('layouts.template')
@section('imports')

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""/>
    <style>
        .map {
            height: 100%;
            width: 100%;
            z-index: 0;
            overflow: hidden;

        }
    </style>
@endsection

@section('title', 'sateliet')
@section('main')

    <div class="home">
        <div class="container" style="padding-bottom: 100px">
            <div class="row">

                <div class="mdc-tab-bar" role="tablist">
                    <div class="mdc-tab-scroller">
                        <div class="mdc-tab-scroller__scroll-area">
                            <div class="mdc-tab-scroller__scroll-content">
                                @foreach($boxen as $box)
                                    <button class="mdc-tab mdc-tab tabbutton" id="{{$box->BoxID}}" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__text-label">Box iD: {{$box->BoxID}}</span>
          </span>
                                        <span class="mdc-tab-indicator">
            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
                                        <span class="mdc-tab__ripple"></span>
                                    </button>
                                @endforeach


                            </div>
                        </div>
                    </div>
                </div>

            </div>
    <div class="row" style="padding-top: 15vh">






{{--        <div class="col">--}}
{{--            @foreach($boxen as $box)--}}
{{--                <div class="content" id="{{$box->BoxID}}">  <div class="col" style="padding-bottom: 10vh" id="mapframe{{$box->BoxID}}"> </div></div>--}}
{{--                    @endforeach--}}
{{--        </div>--}}
            <div class="col"  id="contentboxen" style="height: 1000px; padding-bottom: 100px">

                <div id="mapid" class="map"></div>
            </div>
    </div>


</div>


    <div class="mdc-layout-grid__cell" style="padding-bottom: 15vh">

    </div>

        </div></div>
    </div>

@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')



    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
    <script>
        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>


    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossorigin=""></script>


    <script>


        $(function ()
        {


        });

    </script>

    <script>


        $(function ()
        {

            $(".tabbutton:first").find(".mdc-tab-indicator--active").remove(".mdc-tab-indicator--active");
            var boxlagen = [];
            var lagenvolgorden = [];
            var mymap = L.map('mapid').setView([51, 4.7], 16);

            var openstreetmaps = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                subdomains: ['a','b','c']
            });
            openstreetmaps.addTo( mymap);

            var countersync = $('.mdc-tab-scroller__scroll-content').children().length;
            var asynccounter = 0;

            $('.mdc-tab-scroller__scroll-content').children().each(function () {


                console.log(this.id)
                $.getJSON('/maprequeset/' +this.id).done(data=>{

                    if(data[0] == null)
                    {
                        console.log("empty");
                        boxlagen.push("empty");
                        var laag = {boxid: this.id, laagindex: boxlagen.length-1, long : 0, lat : 0};
                        lagenvolgorden.push(laag);
                        asynccounter ++;
                        if(asynccounter === countersync)
                        {
                            console.log("trigger");
                            var loop = false;
                            f = 0;
                            while (loop === false)
                            {

                                console.log("loop "+ f);
                                if (boxlagen[f] !== "empty")
                                {

                                    var result = lagenvolgorden.find(obj => {
                                        return obj.laagindex === f
                                    })
                                    var indexvol =lagenvolgorden.findIndex(x => x.laagindex === result.laagindex)
                                    result.active = true;
                                    lagenvolgorden[indexvol] = result;
                                    console.log(lagenvolgorden);
                                    mymap.addLayer(boxlagen[f]);
                                    mymap.flyTo([result.lat, result.long] ,16);




                                    loop= true;


                                }
                                f++;
                            }
                        }
                    }
                    else
                    {
                        console.log(data);
                        var fapar =   L.tileLayer.wms('https://services.terrascope.be/wms/v2?service=WMS&version=1.3.0', {
                            layers: 'CGS_S2_FAPAR',
                            time : data[2]
                        });
                        boxlagen.push(fapar)
                        var laag = {boxid: this.id, laagindex: boxlagen.length-1, long: data[1], lat: data[0], active: false};
                        lagenvolgorden.push(laag);
                        asynccounter ++;
                        console.log(asynccounter);
                        console.log(countersync);
                        if(asynccounter === countersync)
                        {
                            console.log("trigger");
                            var loop = false;
                            f = 0;
                            while (loop === false)
                            {

                                console.log("loop "+ f);
                                if (boxlagen[f] !== "empty")
                                {

                                    var result = lagenvolgorden.find(obj => {
                                        return obj.laagindex === f
                                    })
                                    var indexvol =lagenvolgorden.findIndex(x => x.laagindex === result.laagindex)
                                    result.active = true;
                                    lagenvolgorden[indexvol] = result;
                                    console.log(lagenvolgorden);
                                    mymap.addLayer(boxlagen[f]);
                                    mymap.flyTo([result.lat, result.long] ,16);




                                    loop= true;


                                }
                                f++;
                            }
                        }



                    }


                })
            })

            ;












            $( ".tabbutton" ).click(function() {
                console.log(boxlagen);
                console.log(lagenvolgorden);


                var result = lagenvolgorden.find(obj => {
                    return obj.boxid === this.id
                })
                console.log(result);
                 var location = parseInt(this.id) - 1 ;
                 if(boxlagen[result.laagindex] !== "empty")
                 {
                     $.each( lagenvolgorden, function( index, value ){
                        if (value.active === true)
                        {

                            mymap.removeLayer(boxlagen[value.laagindex])
                        }
                     });

                     var indexvol =lagenvolgorden.findIndex(x => x.laagindex === result.laagindex)
                     result.active = true;
                     lagenvolgorden[indexvol] = result;
                     mymap.addLayer(boxlagen[result.laagindex]);
                     mymap.flyTo([result.lat, result.long] ,16);
                 }
                 else
                 {
                     mymap.removeLayer(boxlagen[result.laagindex]);
                     console.log("this box has no location")
                 }

            });


        })


    </script>
    <script>

        $(function() {




            $('#satelieticoon').addClass('mdc-bottom-navigation__list-item--activated');
            $('#contentboxen').children().each(function () {
                console.log(this.id) // "this" is the current element in the loop

                $.getJSON('/maprequeset/'+this.id).done(data=>{

                  console.log(data);
                    //console.log( $("#mapframe"+this.id).content);
                   if( data[0] !== null) {
                       $("#mapframe" + this.id).append("<iframe></iframe>").children().attr("height", '800px').attr('width', '100%').attr('datum', data[2]).attr('id', 'terramap').attr('name', 'terramap').attr('lat', data[1]).attr('long', data[0]).attr('src', '../assets/map.html');
                   }
               else
                   {
                       $("#mapframe" + this.id).append("<div> Er is zijn geen gps cordianten beschikbaar van deze box kijk na of hij wel aangesloten is </div>")
                   }
               })
            });


        });

        //const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
        //$('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');


    </script>
    <script>

        const MDCTabBar = mdc.tabBar.MDCTabBar;
        var tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        var contentEls = document.querySelectorAll('.content');
        tabBar.listen('MDCTabBar:activated', function (event) {
            // Hide currently-active content
            document.querySelector('.content--active').classList.remove('content--active');
            // Show content for newly-activated tab
            contentEls[event.detail.index].classList.add('content--active');
            localStorage.setItem('selectedTab', $('.mdc-tab--active').attr('id'));
            localStorage.setItem('contentActive', $('.content--active').attr('id'));
        });

        var selectedTab = localStorage.getItem('selectedTab');
        var contentActive = localStorage.getItem('contentActive');
        if (selectedTab) {
            console.log(selectedTab)
            $('#' + selectedTab).addClass('mdc-tab--active');
            console.log('#' + selectedTab + ' span:nth-child(2)');
            $('#' + selectedTab + ' span:nth-child(2)').addClass('mdc-tab-indicator--active');
            $('#' + contentActive).addClass('content--active');
        } else {
            $('.mdc-tab-scroller__scroll-content button').first().addClass('mdc-tab--active');
            $('.mdc-tab-indicator').first().addClass('mdc-tab-indicator--active');
            $('.content').first().addClass('content--active');
        }








    </script>

@endsection

{{--@include('data-schermen.bottom-nav')--}}

