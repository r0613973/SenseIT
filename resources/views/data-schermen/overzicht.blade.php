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
                <div class="row content justify-content-md-center">
                    <H2>Dit zijn de laatst gemeten waarden per
                        sensor</H2>

                    @foreach($box->sensors as $sensor)
                        @if ($sensor != null)
                            <div class="col">
                                <div class="card ">
                                    <div class="card-body">
                                        <h5 class="card-title"><b>{{$sensor->Name}} [{{$sensor->Unit}}] </b>- Laatste
                                            update {{Str::substr($sensor->TimeStamp, 0, 19)}}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted"> {{$sensor->SensorName}}</h6>
                                        <p class="card-text"><b>Waarde: </b>{{$sensor->Value . $sensor->Unit}}</p>
                                    </div>
                                </div>
                            </div>
                        @endif


                    @endforeach
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
