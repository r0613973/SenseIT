<?php

namespace App\Http\Controllers;

use App\Models\Box;
use App\Models\BoxUser;
use App\Models\Location;
use App\Models\User;
use App\Models\UserType;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;
use Log;
use Symfony\Component\Console\Output\ConsoleOutput;

class CrudBoxController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('data-schermen.box_overview');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $users = User::orderBy('FirstName', 'DESC')->get();
        $result = compact('users');
        Json::dump($result);
        return view('data-schermen.create_new_box', $result);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'user' => 'required',
            'boxnaam' => 'required',
            'startdatum' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'macadres' => 'required',
            'comment' => 'required'
        ]);

        $boxen = Box::all();
        $last_box = $boxen->last();
        $boxUsers = BoxUser::all();
        $last_boxUser = $boxUsers->last();

        $box = new Box();
        $box->Active = true;
        $box->ConfiguratieString = null;
        $box->MacAddress = $request->macadres;
        $box->Name = $request->boxnaam;
        $box->Comment = $request->comment;
        $box->save();

        $correct_box = Box::orderBy('BoxID', 'desc')->first();


        $boxuser = new BoxUser();
        $boxuser->UserID = $request->user;
        $boxuser->BoxID = $correct_box->BoxID;
        $boxuser->StartDate = $request->startdatum;
        $boxuser->EndDate = null;
        $boxuser->save();

        $correct_boxUser = BoxUser::orderBy('BoxUserID', 'desc')->first();

        $location = new Location();
        $location->BoxUserID = $correct_boxUser->BoxUserID;
        $location->Latitude = $request->latitude;
        $location->Longitude = $request->longitude;
        $location->StartDate = $request->startdatum;
        $location->EndDate = null;
        $location->save();

        return response()->json([
            'type' => 'success',
            'text' => "De box <b>$box->Name </b> is toegevoegd."
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Box $box
     * @return \Illuminate\Http\Response
     */
    public function show(Box $box)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Box $box
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $users = User::orderBy('FirstName', 'DESC')->get();
        $boxUser = BoxUser::where('BoxID', 'like', $id)->first();
        $location = Location::where('BoxUserID', 'like', $boxUser->BoxUserID)->first();
        $box = Box::where('BoxID', 'like', $id)->first();
        $result = compact('box', 'users', 'boxUser', 'location');

        return view('data-schermen.update_box', $result);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Models\Box $box
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $box = Box::find($id);
        $boxUser = BoxUser::where('BoxID', 'like', $id)->first();
        $location = Location::where('BoxUserID', 'like', $boxUser->BoxUserID)->first();

        $this->validate($request, [
            'user' => 'required',
            'boxnaam' => 'required',
            'startdatum' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'macadres' => 'required',
            'comment' => 'required'
        ]);


        $box->MacAddress = $request->macadres;
        $box->Name = $request->boxnaam;
        $box->Comment = $request->comment;
        $box->Active = $request->active;
        $box->save();

        $boxUser->UserID = $request->user;
        $boxUser->BoxID = $box->BoxID;
        $boxUser->StartDate = $request->startdatum;
        $boxUser->save();

        $location->BoxUserID = $boxUser->BoxUserID;
        $location->Latitude = $request->latitude;
        $location->Longitude = $request->longitude;
        $location->StartDate = $request->startdatum;
        $location->save();
        return response()->json([
            'type' => 'success',
            'text' => "De box <b>$box->Name </b> is geüpdatet."
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Box $box
     * @return \Illuminate\Http\Response
     */
    public function destroy(Box $box)
    {
        //
    }

    public function qryBoxen()
    {
        $boxen = Box::orderBy('BoxID')
            ->get();
        return $boxen;
    }
}
