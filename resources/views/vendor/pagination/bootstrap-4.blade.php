{{--TODO Deze pagina heb ik custom gemaakt, niets aan veranderen--}}
@if ($paginator->hasPages())
    <div class="mdc-data-table__pagination ">
        <div class="mdc-data-table__pagination-trailing">
            <div class="mdc-data-table__pagination-navigation align-items-center">
                {{-- Previous Page Link --}}
                @if ($paginator->onFirstPage())
                    <button class="mdc-icon-button material-icons mdc-data-table__pagination-button"
                            data-first-page="true"
                            disabled>
                        <div class="mdc-button__icon">chevron_left</div>
                    </button>

                @else
                    <a href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">
                        <button class="mdc-icon-button material-icons mdc-data-table__pagination-button"
                                data-first-page="true"
                        >
                            <div class="mdc-button__icon paginationButton">chevron_left</div>
                        </button>
                    </a>
                @endif

                {{-- Pagination Elements --}}
                @foreach ($elements as $element)
                    {{-- "Three Dots" Separator --}}
                    @if (is_string($element))
                       {{-- <li class="page-item disabled" aria-disabled="true"><span
                                class="page-link">{{ $element }}</span></li>--}}
                        <button class="mdc-icon-button  mdc-data-table__pagination-button">{{$element}}</button>
                    @endif

                    {{-- Array Of Links --}}
                    @if (is_array($element))
                        @foreach ($element as $page => $url)
                            @if ($page == $paginator->currentPage())
                                <button class="mdc-icon-button  mdc-data-table__pagination-button">{{$page}}</button>
                            @else
                                <a href="{{ $url }}">
                                    <button
                                        class="mdc-icon-button  mdc-data-table__pagination-button"><span class="paginationButton">{{$page}}</span></button>
                                </a>
                            @endif

                        @endforeach
                    @endif
                @endforeach

                {{-- Next Page Link --}}
                @if ($paginator->hasMorePages())
                    <a href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">
                        <button class="mdc-icon-button material-icons mdc-data-table__pagination-button"
                                data-last-page="true">
                            <div class="mdc-button__icon paginationButton">chevron_right</div>
                        </button>
                    </a>
                @else
                    <button class="mdc-icon-button material-icons mdc-data-table__pagination-button"
                            data-last-page="true" disabled>
                        <div class="mdc-button__icon">chevron_right</div>
                    </button>
                @endif


            </div>
        </div>
    </div>

    <p class="text-sm text-gray-700 leading-5 text-center">
        <span class="font-medium">{{ $paginator->firstItem() }}</span>
        {!! __('-') !!}
        <span class="font-medium">{{ $paginator->lastItem() }}</span>
        {!! __('van') !!}
        <span class="font-medium">{{ $paginator->total() }}</span>
        {!! __('metingen') !!}
    </p>
@endif
