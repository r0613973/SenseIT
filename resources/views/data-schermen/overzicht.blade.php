@extends('layouts.template')

@section('title', 'Overzicht')
@section('main')
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="mdc-tab-bar" role="tablist">
                    <div class="mdc-tab-scroller">
                        <div class="mdc-tab-scroller__scroll-area">
                            <div class="mdc-tab-scroller__scroll-content">
                                @foreach($boxen as $box)
                                    <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__text-label">{{$box['box']->Name}}</span>
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

            @foreach($boxen as $box)
                <div id="overzichtstabel" class="row content justify-content-md-center">
                    <H2>Dit zijn de laatst gemeten waarden per
                        sensor</H2>

                    @foreach($box->sensors as $sensor)
                        @if ($sensor != null)
                            <div class="col">
                                <div class="card ">
                                    <div class="card-body">
                                        <h5 class="card-title overzichtTitle"><b>{{$sensor->Name}} [{{$sensor->Unit}}
                                                ] </b>- Laatste
                                            update {{Str::substr($sensor->TimeStamp, 0, 19)}}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted "> {{$sensor->SensorName}}</h6>
                                        <p class="card-text overzichtText">
                                            <b>Waarde: </b>{{$sensor->Value . $sensor->Unit}}</p>
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endforeach
                    <iframe src="https://20.71.209.149:3000/d-solo/k7fNW2PGz/sensoren-metingen-dashboard?orgId=1&from=now-1d
            &to=now%2B1h&refresh=1m&var-User_Name=1&var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}
                        &var-Sensor_type=4&var-Unit=%25&var-X_Coordinaten=&var-Y_Coordinaten=
                    @foreach($box->sensors as $sensor)
                        &var-SensorID={{$sensor->SensorID}}
                    @endforeach
                        &var-query0=&var-SensorID2=15&var-SensorIDname=1&panelId=23&theme=light" width="450"
                            height="500"
                            frameborder="0"></iframe>

                    <iframe src="https://20.71.209.149:3000/d-solo/k7fNW2PGz/sensoren-metingen-dashboard?orgId=1
                    &from=now-4d
            &to=now%2B1h&var-User_Name=1&var-Box_Admin=All&var-Box_Boer={{$box->BoxID}}
                    &var-Sensor_type=All&var-Unit=%25&var-X_Coordinaten=&var-Y_Coordinaten=&var-SensorID=15&var-SensorID=18
                    &var-SensorID=39&var-SensorID=40&var-SensorID=41&var-SensorID=42&var-query0=&var-SensorID2=17
                    &var-SensorIDname=1&panelId=30&theme=light" width="450" height="300" frameborder="0"></iframe>


                    <iframe src="https://20.71.209.149:3000/d-solo/k7fNW2PGz/sensoren-metingen-dashboard?orgId=1
                    &from=now-5d
            &to=now%2B1h&var-User_Name=1&var-Box_Admin=All&var-Box_Boer=5&var-Sensor_type=All
                    &var-Unit=%25&var-X_Coordinaten=&var-Y_Coordinaten=&var-SensorID=15&var-SensorID=16&var-SensorID=18
                    &var-SensorID=20&var-SensorID=39&var-SensorID=40&var-SensorID=41&var-SensorID=42&var-query0=&var-SensorID2=17
                    &var-SensorIDname=1&panelId=29&theme=light" width="450" height="300" frameborder="0"></iframe>
                </div>
            @endforeach

        </div>
    </div>
@endsection
@section('script')
    <script>
        const MDCTabBar = mdc.tabBar.MDCTabBar;
        var tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        var contentEls = document.querySelectorAll('.content');


        /*   var selectedTab = localStorage.getItem('selectedTab');
           var contentActive = localStorage.getItem('contentActive');
           if (selectedTab) {
               console.log(selectedTab)
               $('#' + selectedTab).addClass('mdc-tab--active');
               console.log('#' + selectedTab + ' span:nth-child(2)');
               $('#' + selectedTab + ' span:nth-child(2)').addClass('mdc-tab-indicator--active');
               $('#' + contentActive).addClass('content--active');
           } else {*/
        $('.mdc-tab-scroller__scroll-content button').first().addClass('mdc-tab--active');
        $('.mdc-tab-indicator').first().addClass('mdc-tab-indicator--active');
        $('.content').first().addClass('content--active');

        tabBar.listen('MDCTabBar:activated', function (event) {
            // Hide currently-active content
            document.querySelector('.content--active').classList.remove('content--active');
            // Show content for newly-activated tab
            contentEls[event.detail.index].classList.add('content--active');
            /* localStorage.setItem('selectedTab', $('.mdc-tab--active').attr('id'));
             localStorage.setItem('contentActive', $('.content--active').attr('id'));*/
        });

    </script>

@endsection
@include('data-schermen.bottom-nav')
