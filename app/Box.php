<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Box extends Model
{

    public function monitorings()
    {
        return $this->hasMany('App\Monitoring');
    }
    public function boxusers()
    {
        return $this->hasMany('App\BoxUser');
    }
    public function sensorboxs()
    {
        return $this->hasMany('App\Sensorbox');
    }
}
