<?php

namespace App\Http\Controllers;

use App\Measurement;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TemperatuurController extends Controller
{
    public function index()
    {
        $measurements = Http::withHeaders([
            'Ocp-Apim-Subscription-Key' => 'a9c9a5b87e2447dba2330ed7ce88efe3'
        ])
            ->get('https://vitoapi.azure-api.net/api/Measurement/Sensor/16/5')->json();


        $vorigewaarde = 0;
       /* foreach ($measurements as $measurement) {
            $measurement->timeStamp =  "0";
            /*if ($measurement['value'] >= $vorigewaarde) {
                $measurement['arrow'] = '-';
            } else {
                $measurement['arrow'] = '-';
            }
            $vorigewaarde = $measurement['value'];
        }*/

        $measurements = collect($measurements)
            ->transform(function ($item, $key) {

                unset($item['sensorBox'], $item['sensorID'], $item['boxID']);
                return $item;
            });



        $result = compact('measurements');
        Json::dump($result);
        return view('data-schermen.temperatuur', $result);
    }
}
