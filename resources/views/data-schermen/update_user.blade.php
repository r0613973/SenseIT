@extends('layouts.template')
@section('title', 'User updaten')
@section('main')
    <div class="container " id="update_user">

        <div class="row text-center justify-content-center d-flex align-items-center mt-5 pt-5">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8  text-left card update_user_form">
                <h2 class="card-header text-center">User updaten</h2>
                <form action="/user/{{$user['UserID']}}" id="update_user_form">
                    @method('PUT')
                    @csrf
                    <div class="card-body">
                        <div class="row ">
                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="voornaam">Voornaam: </label>
                                <input class="form-control" name="voornaam" id="voornaam" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de voornaam van de user in"
                                       placeholder="Voornaam van de user"
                                       value="{{$user->FirstName}}">
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="achternaam">Achternaam: </label>
                                <input class="form-control" name="achternaam" id="achternaam" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de achternaam van de user in"
                                       placeholder="Achternaam van de user"
                                       value="{{$user->FirstName}}">
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="email">Email: </label>
                                <input class="form-control" name="email" id="email" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de email van de user in"
                                       placeholder="Email van de user"
                                       value="{{$user->Email}}">
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="adres">Adres: </label>
                                <input class="form-control" name="adres" id="adres" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier het adres van de user in"
                                       placeholder="Adres van de user"
                                       value="{{$user->Address}}">
                            </div>

                            <div class="form-group formulier col-lg-4  col-md-6 mb-3">
                                <label for="postcode">Postcode: </label>
                                <input class="form-control" name="postcode" id="postcode" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de postcode van de user in"
                                       placeholder="Postcode van de user"
                                       value="{{$user->PostalCode}}">
                            </div>

                            <div class="form-group formulier col-lg-4  col-md-6 mb-3">
                                <label for="stad">Stad: </label>
                                <input class="form-control" name="stad" id="stad" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de stad van de user in"
                                       placeholder="Stad van de user"
                                       value="{{$user->City}}">
                            </div>

                            <div class="form-group formulier col-lg-4 col-md-6 mb-3">
                                <label for="usertype">User type: </label>
                                <select class="form-control" name="usertype" id="usertype">
                                    @foreach($userTypes as $userType)
                                        <option
                                                value="{{$userType['UserTypeID']}}" {{ ($userType->UserTypeID == $user->UserTypeID) ? 'selected="selected"' : '' }}>{{$userType['UserTypeName']}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <br>
                        <div class="row justify-content-around">
                            <button type="submit" class="col col-lg-5 col-md-5 col-sm-12 btn btn-light m-2">User
                                updaten
                            </button>
                            <a href="/user" class="col col-lg-5 col-md-5 col-sm-12 btn btn-light m-2">Naar user
                                overzicht</a>
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
            $('#update_user_form').submit(function (e) {
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