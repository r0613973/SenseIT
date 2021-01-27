<div class="mdc-data-table">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
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
        @section('someSection')
            {{ $value = 0 }}
        @endsection
        @foreach($measurements as $measurement)
            <tr class="mdc-data-table__row">
                @if($measurement['value']>=$value)
                    <td class="mdc-data-table__cell "><i class="fas fa-arrow-circle-up"></i></td>

                @else
                    <td class="mdc-data-table__cell "><i class="fas fa-arrow-circle-down"></i></td>
                @endif
                @section('someSection')
                    {{ $value = $measurement['value'] }}
                @endsection
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{{$measurement['value']}} </td>
                <td class="mdc-data-table__cell ">{{$measurement['timeStamp']}}</td>

            </tr>
        @endforeach
        </tbody>
    </table>
</div>


