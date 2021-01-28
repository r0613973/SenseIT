<?php /** @noinspection Annotator */

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SensorType
 *
 * @property int $SensorTypeID
 * @property character varying $Name
 * @property character varying $Unit
 *
 * @property Collection|Sensor[] $sensors
 *
 * @package App\Models
 */
class SensorType extends Model
{
	protected $table = 'SensorType';
	protected $primaryKey = 'SensorTypeID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'SensorTypeID' => 'int',
		'Name' => 'character varying',
		'Unit' => 'character varying'
	];

	protected $fillable = [
		'Name',
		'Unit'
	];

	public function sensors()
	{
		return $this->hasMany(Sensor::class, 'SensorTypeID');
	}
}
