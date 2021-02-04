@extends('layouts.template')


@section('title', 'sateliet')
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
        <div class="col">

            <div class="col" id="mapframe">


    </div></div>
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
    <script>
        $('#temperatuurIcon').addClass('mdc-bottom-navigation__list-item--activated');
    </script>


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

@endsection
            @section('script2')
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

