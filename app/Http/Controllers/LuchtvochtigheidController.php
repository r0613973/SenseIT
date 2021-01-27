<?php

namespace App\Http\Controllers;

use Facades\App\Helpers\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LuchtvochtigheidController extends Controller
{
    public function index()
    {
        $measurements = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => 'a9c9a5b87e2447dba2330ed7ce88efe3'
        ])
            ->get('https://vitoapi.azure-api.net/api/Measurement/Sensor/15/5')->json();

        $measurements = collect($measurements)
            ->transform(function ($item, $key) {

                unset($item['sensorBox'], $item['sensorID'], $item['boxID']);
                return $item;
            });



        $result = compact('measurements');
        Json::dump($result);
        return view('data-schermen.luchtvochtigheid', $result);
    }
}
