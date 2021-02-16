@extends('layouts.template')
@section('title', 'Profiel')
@section('main')
    <div class="container " id="update_box">

        <div class="row text-center justify-content-center d-flex align-items-center mt-5 pt-5">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8  text-left card " id="new_box_form">
                <h2 class="card-header text-center">Profiel updaten</h2>
                <form action="/account/{{$user->UserID}}"  method="post" id="update_box_form" onautocomplete="on">
                    @method('PUT')
                    @csrf
                    <div class="card-body">
                        <div class="row ">
                            <div class="form-group formulier col-lg-12 col-md-12 mb-3">
                                <label for="email">Email</label>
                                <input class="form-control" name="email" id="email" data-toggle="tooltip"
                                       data-placement="right"
                                       type="email"
                                       title="Vul hier je email in"
                                       placeholder="Email"
                                       value="{{$user->Email}}" autofocus>
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="voornaam">Voornaam</label>
                                <input class="form-control" name="voornaam" id="voornaam" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier je voornaam in"
                                       placeholder="Voornaam"
                                       value="{{$user->FirstName}}">
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="achternaam">Achternaam</label>
                                <input  class="form-control" name="achternaam" id="achternaam"
                                       data-toggle="tooltip" data-placement="right"
                                       title="Vul hier je achternaam in"
                                       placeholder="Achternaam"
                                       value="{{$user->LastName}}">
                            </div>

                            <div class="form-group formulier col-lg-8  col-md-8 mb-3">
                                <label for="adres">Adres & Nr</label>
                                <input class="form-control" name="adres" id="adres" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier je adres en nummer in"
                                       placeholder="Adres & nummer"
                                       value="{{$user->Address}}">
                            </div>

                            <div class="form-group formulier col-lg-4  col-md-6 mb-3">
                                <label for="postcode">PostCode</label>
                                <input class="form-control" name="postcode" id="postcode" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier je postcode in"
                                       placeholder="Postcode"
                                       value="{{$user->PostalCode}}">
                            </div>

                            <div class="form-group formulier col-lg-12  col-md-12 mb-3">
                                <label for="woonplaats">Woonplaats</label>
                                <input class="form-control" name="woonplaats" id="woonplaats" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier je woonplaats  in"
                                       placeholder="Woonplaats "
                                       value="{{$user->City}}">
                            </div>


                        </div>
                        <br>
                        <div class="row justify-content-around">
                            <button type="submit" class="col col-lg-5 col-md-5 col-sm-12 btn btn-light m-2">Profiel updaten</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('script')

    <script>
        $(function () {
            $('#update_box_form').submit(function (e) {
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
                        window.setTimeout(function(){window.location = "/home"},1)
                        // Hide the modal
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
            });
        });
    </script>
@endsection

