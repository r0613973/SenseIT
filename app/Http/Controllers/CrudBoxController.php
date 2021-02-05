<?php

namespace App\Http\Controllers;

use App\Models\Box;
use App\Models\BoxUser;
use App\Models\Location;
use App\Models\User;
use App\Models\UserType;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;
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
        $admins = UserType::all();
        $users = User::orderBy('FirstName','DESC')->get();
        $result = compact('users', 'admins');
        Json::dump($result);
        return view('data-schermen.create_new_box',$result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
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

        $out = new ConsoleOutput();
        $out->writeln('Ik geraak tot hier');

        $box = new Box();
        $box->MacAddress = $request->macadres;
        $box->Name = $request->boxnaam;
        $box->Comment = $request->comment;
        $box->save();


        $boxuser = new BoxUser();
        $boxuser->UserID = $request->user;
        $boxuser->BoxID = $box->BoxID;
        $boxuser->StartDate = $request->startdatum;
        $boxuser->save();

        $location = new Location();
        $location->BoxUserID = $boxuser->BoxUserID;
        $location->Latitude = $request->latitude;
        $location->Longitude = $request->longitude;
        $location->StartDate = $request->startdatum;
        $location->save();

        return response()->json([
            'type' => 'success',
            'text' => "De box <b>$box->Name </b> is toegevoegd."
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Box  $box
     * @return \Illuminate\Http\Response
     */
    public function show(Box $box)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Box  $box
     * @return \Illuminate\Http\Response
     */
    public function edit(Box $box)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Box  $box
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Box $box)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Box  $box
     * @return \Illuminate\Http\Response
     */
    public function destroy(Box $box)
    {
        //
    }
}
