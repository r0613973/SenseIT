@extends('layouts.template')
@section('title', 'Overzicht van alle boxen')
@section('main')
    <div class="container " id="box_overview">
        <h1>Overzicht van alle boxen</h1>
        <p class="justify-content-start">
            <a href="/box/create" class="btn" id="btn_create"
               title="Klik hier om een nieuwe box toe te voegen">
                <i class="fas fa-plus-circle m-1"></i>Voeg een nieuwe box toe
            </a>
        </p>
        <div class="row text-center justify-content-center d-flex align-items-center">

            <div class="table-responsive">
                <table class="table mt-0 display responsive nowrap" width="100%" id="myTable">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>MAC adres</th>
                        <th>Comment</th>
                        <th>Active</th>
                        <th>Edit box</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js" defer></script>
    <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" defer></script>
    <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
    <script>
        $(function () {
            loadTable();
            $('tbody').on('click', '.btn-edit', function () {
/*                // Get data attributes from td tag
                let Id = $(this).closest('td').data('id');
                let Naam = $(this).closest('td').data('headorganizer');
                let MacAdres = $(this).closest('td').data('firstname');
                let Comment = $(this).closest('td').data('lastname');
                let Active = $(this).closest('td').data('email');
                // Update the modal
                $('.modal-title').text(`Edit ${firstname} ${lastname}`);
                $('form').attr('action', `/manage-organisers/${id}`);
                $('#firstname').val(firstname);
                $('#lastname').val(lastname);
                $('#email').val(email);
                $('.password_organiser').css("display", "none");
                if (organiser_type_id === 1) {
                    $('#headorganizer').prop('checked', true);
                }
                if (organiser_type_id === 2) {
                    $('#headorganizer').prop('checked', false);
                }
                $('input[name="_method"]').val('put');
                // Show the modal
                $('#modal-organizer').modal('show');*/
            });

            $('tbody').on('click', '.btn-delete', function () {
                // Get data attributes from td tag
                let id = $(this).closest('td').data('id');
                let naam = $(this).closest('td').data('naam');
                // Set some values for Noty
                let text = `<p>Verwijder box <b>${naam}</b>?</p>`;
                let type = 'warning';
                let btnText = 'Delete box';
                let btnClass = 'btn-success';

                // Show Noty
                let modal = new Noty({
                    timeout: false,
                    layout: 'center',
                    modal: true,
                    type: type,
                    text: text,
                    buttons: [
                        Noty.button(btnText, `btn ${btnClass}`, function () {
                            // Delete user and close modal
                            deleteBox(id);
                            modal.close();
                        }),
                        Noty.button('Cancel', 'btn btn-secondary ml-2', function () {
                            modal.close();
                        })
                    ]
                }).show();
            });

            function deleteBox(id) {
                // Delete the user from the database
                let pars = {
                    '_token': '{{ csrf_token() }}',
                    '_method': 'delete'
                };
                $.post(`/box/${id}`, pars, 'json')
                    .done(function (data) {
                        console.log('data', data);
                        // Show toast
                        new Noty({
                            type: data.type,
                            text: data.text
                        }).show();
                        // Rebuild the table
                        loadTable();
                    })
                    .fail(function (e) {
                        console.log('error', e);
                    });
            }

            $('#btn_create').click(function () {
               /* // Update the modal
                $('.modal-title').text(`Nieuwe organisator`);
                $('form').attr('action', `/manage-organisers`);
                $('#firstname').val('');
                $('#lastname').val('');
                $('#email').val('');
                $('#headorganizer').prop('checked', false);
                $('input[name="_method"]').val('post');
                // Show the modal
                $('#modal-organizer').modal('show');*/
            });


            /*$('#modal-organizer form, .organiserForm').submit(function (e) {
                // Don't submit the form
                e.preventDefault();
                // Get the action property (the URL to submit)
                let action = $(this).attr('action');
                // Serialize the form and send it as a parameter with the post
                let pars = $(this).serialize();
                console.log(pars);
                // Post the data to the URL
                $.post(action, pars, 'json')
                    .done(function (data) {
                        console.log(data);
                        // Noty success message
                        new Noty({
                            type: data.type,
                            text: data.text
                        }).show();
                        // Hide the modal
                        $('#modal-organizer').modal('hide');
                        loadTable();
                    })
                    .fail(function (e) {
                        console.log('error', e);
                        // e.responseJSON.errors contains an array of all the validation errors
                        console.log('error message', e.responseJSON.errors);
                        // Loop over the e.responseJSON.errors array and create an ul list with all the error messages
                        let msg = '<ul>';
                        $.each(e.responseJSON.errors, function (key, value) {
                            msg += `<li>${value}</li>`;
                        });
                        msg += '</ul>';
                        // Noty the errors
                        new Noty({
                            type: 'error',
                            text: msg
                        }).show();
                    });
            });*/
        });

        // Load genres with AJAX
        function loadTable() {
            $.getJSON('qryBoxen')
                .done(function (data) {
                    console.log('data', data);
                    $('#myTable').DataTable().destroy();
                    // Clear tbody tag
                    $('tbody').empty();

                    // Loop over each item in the array
                    $.each(data, function (key, value) {
                        let tr = `<tr>
                               <td>${value.Name}</td>
                               <td>${value.MacAddress}</td>
                               <td>${value.Comment}</td>
                               <td>
                               <div class="custom-control custom-switch">
                               <input type="checkbox" ${value.Active == 1 ? 'checked':''} class="custom-control-input" disabled id="customSwitch">
                               <label class="custom-control-label" for="customSwitch"></label></div>
                               </td>
                               <td data-id="${value.BoxID}"
                                   data-naam="${value.Name}"
                                   data-macadres="${value.MacAddress}"
                                   data-comment="${value.Comment}"
                                   data-active="${value.Active}"

                                   <form action="/box/${value.BoxID}" method="post" class="boxForm">

                                    <div class="btn-group btn-group-sm">
                                        <a href="/box/${value.BoxID}/edit" class="btn btn-outline-success btn-edit"
                                            data-naam="${value.Name}"
                                            title="Edit ${value.Name}"
                                            data-id="${value.BoxID}">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                    </div>
                                  </form>
                               </td>
                           </tr>`;
                        // Append row to tbody
                        $('tbody').append(tr);
                    });
                    $('#myTable').DataTable({
                        responsive: true,
                        "dom": "<'row'<'col-sm-12 col-md-6 text-left'l><'col-sm-12 col-md-6'f>>" +
                            "<'row'<'col-sm-12'tr>>" +
                            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                        language: {
                            "decimal": ",",
                            "sLengthMenu": "Toon _MENU_ per pagina",
                            "emptyTable": "Er zijn geen boxen gevonden",
                            "info": "Toont _START_ tot _END_ van _TOTAL_ gevonden boxen",
                            "infoEmpty": "Toont 0 - 0 van de 0 organisatoren",
                            "infoFiltered": "(gefiltered van _MAX_ boxen)",
                            "infoPostFix": "",
                            "loadingRecords": "Aan het laden...",
                            "processing": "Verwerken...",
                            "search": "Zoeken:",
                            "zeroRecords": "Er zijn geen boxen gevonden",
                            "paginate": {
                                "first": "Eerste",
                                "last": "Laatste",
                                "next": "Volgende",
                                "previous": "Vorige"
                            },
                            "aria": {
                                "sortAscending": ": Klik hierop om de kolom oplopend te sorteren",
                                "sortDescending": ": Klik hierop om de kolom aflopend te sorteren"
                            }
                        },
                        columnDefs: [
                            {orderable: false, targets: -1},
                            { responsivePriority: 1, targets: 0 },
                            { responsivePriority: 2, targets: 1 },
                            { responsivePriority: 3, targets: 2 },
                            { responsivePriority: 4, targets: 3 },
                            { responsivePriority: 5, targets: 4 }

                        ]
                    });
                })
                .fail(function (e) {
                    console.log('error', e);
                });
        }
    </script>
@endsection

