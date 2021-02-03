<?php

namespace App\Http\Controllers;

use App\Models\BoxUser;
use App\Models\Measurement;
use App\Models\Monitoring;
use App\Models\SensorBox;
use Illuminate\Http\Request;
use Facades\App\Helpers\Json;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $user = auth()->user();
        $userID= $user['UserID'];
        $boxen = BoxUser::where('BoxUser.UserID', '=', $userID)->orderby('BoxID')->with('Box')->get();

        foreach ($boxen as $box) {

            $box['Snapshot'] = Monitoring::where('Monitoring.BoxID', 'like', $box['BoxID'])
                ->orderby('TimeStamp', 'desc')
                ->get()
                ->first();

            $box['Sensoren'] = SensorBox::where('SensorBox.BoxID', "=" ,$box['BoxID'])
                ->with('Sensor')
                ->join('Sensor', 'SensorBox.SensorID', '=', "Sensor.SensorID")
                ->join('SensorType', 'Sensor.SensorTypeID', '=', 'SensorType.SensorTypeID')
                ->get();
        }

        $snapshot = compact('boxen');
        $user = compact('user');
        Json::dump($user);
        return view('home', $snapshot, $user);
    }


}
