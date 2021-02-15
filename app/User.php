<?php /** @noinspection Annotator */
/** @noinspection Annotator */
/** @noinspection Annotator */

/**
 * Created by Reliese Model.
 */

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends  Authenticatable
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
        return $this->belongsTo(\App\Models\UserType::class, 'UserTypeID');
    }

    public function boxes()
    {
        return $this->belongsToMany(\App\Models\Box::class, 'BoxUser', 'UserID', 'BoxID')
            ->withPivot('BoxUserID', 'StartDate', 'EndDate');
    }
}
