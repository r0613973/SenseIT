<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SensorBox
 * 
 * @property int $BoxID
 * @property int $SensorID
 * 
 * @property Box $box
 * @property Sensor $sensor
 * @property Collection|Measurement[] $measurements
 *
 * @package App\Models
 */
class SensorBox extends Model
{
	protected $table = 'SensorBox';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'BoxID' => 'int',
		'SensorID' => 'int'
	];

	public function box()
	{
		return $this->belongsTo(Box::class, 'BoxID');
	}

	public function sensor()
	{
		return $this->belongsTo(Sensor::class, 'SensorID');
	}

	public function measurements()
	{
		return $this->hasMany(Measurement::class, 'BoxID');
	}
}
