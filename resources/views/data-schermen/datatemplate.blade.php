<div class="container">
    <div class="mdc-data-table">

        {{ $measurements->links() }}
        <table class="mdc-data-table__table">
            <thead>
            <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col"><i
                        class="fas fa-arrow-circle-right"></i></th>
                <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader"
                    scope="col">Waarde
                </th>
                <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader"
                    scope="col">Tijdstip
                </th>

            </tr>
            </thead>
            <tbody class="mdc-data-table__content">

            @foreach($measurements as $measurement)
                <tr class="mdc-data-table__row">
                    <td class="mdc-data-table__cell ">{!! $measurement->Arrow !!}</td>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{$measurement->Value . $measurement->Unit}}  </td>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{$measurement->TimeStamp}}</td>

                </tr>
            @endforeach

            </tbody>

        </table>


    </div>
</div>
