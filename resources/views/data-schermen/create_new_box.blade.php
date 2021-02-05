@extends('layouts.template')
@section('title', 'Nieuwe box aanmaken')
@section('main')
    <div class="container " id="new_box">
        <h1>Nieuwe box aanmaken</h1>
        <div class="row text-center justify-content-center d-flex align-items-center mt-5 pt-5">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8  text-left card " id="new_box_form">
                <h2 class="card-header">Nieuwe box</h2>
                <form action="/submit_new_box">
                    <div class="card-body">
                        <div class="row ">
                            <div class="form-group formulier col-lg-6 col-md-6 mb-3">
                                <label for="user">User: </label>
                                <select class="form-control" name="user" id="user">
                                    @foreach($users as $user)
                                        @if($user['UserTypeID'] != 1)
                                            <option
                                                    value="{{$user['id']}}">{{$user['FirstName'] ." ". $user['LastName']}}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="boxnaam">Naam van de box: </label>
                                <input class="form-control" name="boxnaam" id="boxnaam" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de naam van de box in"
                                       placeholder="Naam van de box"
                                       value="">
                            </div>

                            <div class="form-group formulier col-lg-4  col-md-6 mb-3">
                                <label for="startdatum">Startdatum: </label>
                                <input type="date" class="form-control" name="startdatum" id="startdatum"
                                       data-toggle="tooltip" data-placement="right"
                                       title="Vul hier de startdatum van het gebruik van de box in"
                                       placeholder="YYYY/MM/DD"
                                       value="">
                            </div>

                            <div class="form-group formulier col-lg-4  col-md-6 mb-3">
                                <label for="latitude">Latitude: </label>
                                <input class="form-control" name="latitude" id="latitude" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de latitude in"
                                       placeholder="Latitude"
                                       value="">
                            </div>

                            <div class="form-group formulier col-lg-4  col-md-6 mb-3">
                                <label for="longitude">Longitude: </label>
                                <input class="form-control" name="longitude" id="longitude" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier de longitude in"
                                       placeholder="Longitude"
                                       value="">
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-6 mb-3">
                                <label for="macadres">Mac adres: </label>
                                <input class="form-control" name="macadres" id="macadres" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier het mac adres  in"
                                       placeholder="Mac adres "
                                       value="">
                            </div>

                            <div class="form-group formulier col-lg-6  col-md-12">
                                <label for="comment">Comment: </label>
                                <input class="form-control" name="comment" id="comment" data-toggle="tooltip"
                                       data-placement="right"
                                       type="text"
                                       title="Vul hier vrijblijvend een comment in"
                                       placeholder="Comment"
                                       value="">
                            </div>
                        </div>
                        <br>

                        <div class=" ">
                            <button type="submit" class="btn btn-light">Box toevoegen</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('bottom-nav')
    @include('data-schermen.bottom-nav')
@endsection
@section('script')

@endsection

