<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Monitoring
 * 
 * @property int $MonitoringID
 * @property int $BoxID
 * @property timestamp without time zone $TimeStamp
 * @property bool|null $BatteryStatus
 * @property character varying|null $SdCapacity
 * @property character varying|null $BatteryPercentage
 * 
 * @property Box $box
 *
 * @package App\Models
 */
class Monitoring extends Model
{
	protected $table = 'Monitoring';
	protected $primaryKey = 'MonitoringID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'MonitoringID' => 'int',
		'BoxID' => 'int',
		'TimeStamp' => 'timestamp without time zone',
		'BatteryStatus' => 'bool',
		'SdCapacity' => 'character varying',
		'BatteryPercentage' => 'character varying'
	];

	protected $fillable = [
		'BoxID',
		'TimeStamp',
		'BatteryStatus',
		'SdCapacity',
		'BatteryPercentage'
	];

	public function box()
	{
		return $this->belongsTo(Box::class, 'BoxID');
	}
}
