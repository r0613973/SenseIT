<?php /** @noinspection Annotator */

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class BoxUser
 *
 * @property int $BoxUserID
 * @property int $BoxID
 * @property int $UserID
 * @property timestamp without time zone|null $StartDate
 * @property timestamp without time zone|null $EndDate
 *
 * @property Box $box
 * @property User $user
 * @property Collection|Location[] $locations
 *
 * @package App\Models
 */
class BoxUser extends Model
{
	protected $table = 'BoxUser';
	protected $primaryKey = 'BoxUserID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'BoxUserID' => 'int',
		'BoxID' => 'int',
		'UserID' => 'int',
		'StartDate' => 'timestamp without time zone',
		'EndDate' => 'timestamp without time zone'
	];

	protected $fillable = [
		'BoxID',
		'UserID',
		'StartDate',
		'EndDate'
	];

	public function box()
	{
		return $this->belongsTo(Box::class, 'BoxID');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'UserID');
	}

	public function locations()
	{
		return $this->hasMany(Location::class, 'BoxUserID');
	}
}
