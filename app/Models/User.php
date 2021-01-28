<?php /** @noinspection Annotator */
/** @noinspection Annotator */
/** @noinspection Annotator */

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 *
 * @property int $UserID
 * @property character varying $LastName
 * @property character varying $FirstName
 * @property character varying $Email
 * @property character varying $Password
 * @property character varying|null $Address
 * @property character varying|null $PostalCode
 * @property character varying|null $City
 * @property int $UserTypeID
 *
 * @property UserType $user_type
 * @property Collection|Box[] $boxes
 *
 * @package App\Models
 * @noinspection Annotator
 */
class User extends Model
{
	protected $table = 'User';
	protected $primaryKey = 'UserID';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'UserID' => 'int',
		'LastName' => 'character varying',
		'FirstName' => 'character varying',
		'Email' => 'character varying',
		'Password' => 'character varying',
		'Address' => 'character varying',
		'PostalCode' => 'character varying',
		'City' => 'character varying',
		'UserTypeID' => 'int'
	];

	protected $fillable = [
		'LastName',
		'FirstName',
		'Email',
		'Password',
		'Address',
		'PostalCode',
		'City',
		'UserTypeID'
	];

	public function user_type()
	{
		return $this->belongsTo(UserType::class, 'UserTypeID');
	}

	public function boxes()
	{
		return $this->belongsToMany(Box::class, 'BoxUser', 'UserID', 'BoxID')
					->withPivot('BoxUserID', 'StartDate', 'EndDate');
	}
}
