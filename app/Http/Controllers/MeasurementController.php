<?php

namespace App\Http\Controllers;

use App\Models\Measurement;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;

class MeasurementController extends Controller
{
    public function temperatuur()
    {
        $measurements =  $this->ophalendata(4, 16);
        $measurements->eenheid  = '°C';
        $result = compact('measurements');
        Json::dump($result);


        return view('data-schermen.temperatuur', $result);
    }

    public function luchtvochtigheid()
    {
        $measurements =  $this->ophalendata(4, 15);
        $measurements->eenheid  = '%';
        $result = compact('measurements');
        Json::dump($result);

        return view('data-schermen.luchtvochtigheid', $result);
    }
    public function zonlicht()
    {
        //TODO Juiste sensor toevoegen
        $measurements =  $this->ophalendata(5, -1);
        $measurements->eenheid  = '%';
        $result = compact('measurements');
        Json::dump($result);

        return view('data-schermen.zonlicht', $result);
    }

    public function luchtkwaliteit()
    {
        //TODO Juiste sensor toevoegen
        $measurements =  $this->ophalendata(5, -1);
        $measurements->eenheid  = 'pm2.5';
        $result = compact('measurements');
        Json::dump($result);

        return view('data-schermen.luchtkwaliteit', $result);
    }


    public function ophalendata($boxID, $SensorID)
    {
        $measurements = Measurement::orderBy('TimeStamp', 'desc')
            ->where('BoxID', 'like', $boxID)
            ->where('SensorID', 'like', $SensorID)->paginate(10);
        $vorigewaarde = 0;
        foreach ($measurements as $measurement) {
            $measurement->timeStamp = "0";

            if ($measurement->Value >= $vorigewaarde) {
                $measurement->Arrow = '<i class="fas fa-arrow-circle-down"></i>';
            } else {
                $measurement->Arrow = '<i class="fas fa-arrow-circle-up"></i>';
            }
            $vorigewaarde = $measurement->Value;
        }

        return $measurements;
    }


}
