<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BoxUser extends Model
{
    public function box()
    {
        return $this->belongsTo('App\Box');
    }
    public function locations()
    {
        return $this->hasMany('App\Location');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
