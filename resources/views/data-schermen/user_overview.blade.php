@extends('layouts.template')
@section('title', 'Overzicht van alle users')
@section('main')
    <div class="container " id="user_overview">
        <p class="justify-content-start">
            <a href="/user/create" class="btn" id="btn_user_create"
               title="Klik hier om een nieuwe user toe te voegen">
                <i class="fas fa-plus-circle m-1"></i>Voeg een nieuwe user toe
            </a>
        </p>
        <div class="row text-center justify-content-center d-flex align-items-center">

            <div class="table-responsive">
                <table class="table mt-0 display responsive nowrap" width="100%" id="myTable2">
                    <thead>
                    <tr>
                        <th>User type</th>
                        <th>Naam</th>
                        <th>Email</th>
                        <th>Adres</th>
                        <th>Acties</th>
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
                let text = `<p>Verwijder user <b>${naam}</b>?</p>`;
                let type = 'warning';
                let btnText = 'Delete user';
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
                            deleteUser(id);
                            modal.close();
                        }),
                        Noty.button('Cancel', 'btn btn-secondary ml-2', function () {
                            modal.close();
                        })
                    ]
                }).show();
            });

            function deleteUser(id) {
                // Delete the user from the database
                let pars = {
                    '_token': '{{ csrf_token() }}',
                    '_method': 'delete'
                };
                $.post(`/user/${id}`, pars, 'json')
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
        });

        // Load genres with AJAX
        function loadTable() {
            $.getJSON('qryUsers')
                .done(function (data) {
                    console.log('data', data);
                    $('#myTable2').DataTable().destroy();
                    // Clear tbody tag
                    $('tbody').empty();

                    // Loop over each item in the array
                    $.each(data, function (key, value) {

                        $value = "";
                        $type = value.UserTypeID;

                        switch ($type) {
                            case 1:
                                $value = "Admin";
                                break;
                            case 2:
                                $value = "Monteur";
                                break;
                            case 3:
                                $value = "Boer";
                                break;
                        }

                        let tr = `<tr>
                               <td>${$value}</td>
                               <td>${value.LastName} ${value.FirstName}</td>
                               <td>${value.Email}</td>
                               <td>${value.Address}, ${value.PostalCode} ${value.City}</td>
                               <td data-id="${value.UserID}"
                                   data-userType="${value.UserTypeID}"
                                   data-achternaam="${value.LastName}"
                                   data-voornaam="${value.FirstName}"
                                   data-wachtwoord="${value.Password}"
                                   data-email="${value.Email}"
                                   data-adres="${value.Address}"
                                   data-postcode="${value.PostalCode}"
                                   data-stad="${value.City}"

                                   <form action="/user/${value.UserID}" method="post" class="userForm">

                                    <div class="btn-group btn-group-sm">
                                        <a href="/user/${value.UserID}/edit" class="btn btn-outline-success btn-edit"
                                            data-naam="${value.LastName} ${value.FirstName}"
                                            title="Edit ${value.LastName} ${value.FirstName}"
                                            data-id="${value.UserID}">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="#!" class="btn btn-outline-danger btn-delete"
                                        data-toggle="tooltip"
                                            data-name="${value.LastName} ${value.FirstName}"
                                            title="Delete ${value.LastName} ${value.FirstName}"
                                            data-id="${value.UserID}">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </div>
                                  </form>
                               </td>
                           </tr>`;
                        // Append row to tbody
                        $('tbody').append(tr);
                    });
                    $('#myTable2').DataTable({
                        "dom": "<'row'<'col-sm-12 col-md-6 text-left'l><'col-sm-12 col-md-6'f>>" +
                            "<'row'<'col-sm-12'tr>>" +
                            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                        language: {
                            "decimal": ",",
                            "sLengthMenu": "Toon _MENU_ per pagina",
                            "emptyTable": "Er zijn geen users gevonden",
                            "info": "Toont _START_ tot _END_ van _TOTAL_ gevonden users",
                            "infoEmpty": "Toont 0 - 0 van de 0 users",
                            "infoFiltered": "(gefiltered van _MAX_ users)",
                            "infoPostFix": "",
                            "loadingRecords": "Aan het laden...",
                            "processing": "Verwerken...",
                            "search": "Zoeken:",
                            "zeroRecords": "Er zijn geen users gevonden",
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
                            {orderable: false, targets: -1}

                        ]
                    });
                })
                .fail(function (e) {
                    console.log('error', e);
                });
        }
    </script>
@endsection

