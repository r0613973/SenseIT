<?php

namespace App\Http\Controllers;

use App\Models\Measurement;
use Facades\App\Helpers\Json;
use Illuminate\Http\Request;

class MeasurementController extends Controller
{
    public function temperatuur()
    {
        $result =  $this->ophalendata(5, 16);

        return view('data-schermen.temperatuur', $result);
    }

    public function luchtvochtigheid()
    {
        $result =  $this->ophalendata(5, 15);

        return view('data-schermen.luchtvochtigheid', $result);
    }
    public function zonlicht()
    {
        //TODO Juiste sensor toevoegen
        $result =  $this->ophalendata(5, -1);

        return view('data-schermen.zonlicht', $result);
    }

    public function luchtkwaliteit()
    {
        //TODO Juiste sensor toevoegen
        $result =  $this->ophalendata(5, -1);

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
        $result = compact('measurements');
        Json::dump($result);
        return $result;
    }


}
