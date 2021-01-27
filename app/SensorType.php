<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SensorType extends Model
{
    public function sensors()
    {
        return $this->hasMany('App\Sensor');
    }

}
