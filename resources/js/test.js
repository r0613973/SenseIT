/get square

// 51.157096880208634, 5.033412036915008

var lat1 = location.Latitude;

var lon1 = location.Longitude;

//scale

var terein = 1000;

//calculatiewaardes

var smRadius = 6378136.98;

var smRange = smRadius * math.pi * 2.0;

var smLonToX = smRange / 360.0;

var smRadiansOverDegrees = math.pi / 180.0;

//bereken rechtsboven

var dLat = terein / smRadius;

var dLon = (terein / smRadius) * math.cos((math.pi * lat1) / 180);

var lat2 = lat1 + (dLat * 180) / math.pi;

var lon2 = lon1 + (dLon * 180) / math.pi;

//get images

var firstProjection = "+proj=longlat +datum=WGS84 +no_defs";

var secondProjection =

    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs";

//I'm not going to redefine those two in latter examples.

var coo1 = proj4(firstProjection, secondProjection, [lon1, lat1]);

var coo2 = proj4(firstProjection, secondProjection, [lon2, lat2]);

// 51.14781235867085, 5.01462099231408

//scale image

var scale = 0.5;

var width = 500

var height = 500

var imgurl1 =

    "https://services.terrascope.be/wms/v2?service=WMS&version=1.3.0&request=GetMap&layers=CGS_S2_FAPAR&format=image/png&time=2020-06-01&width=" +

    width.toString() +

    "&height=" +

    height.toString() +

    "&bbox=";

var imgurl2 = "&styles=&srs=EPSG:3857";

var url =

    imgurl1 +

    coo1[0] +

    "," +

    coo1[1] +

    "," +

    coo2[0]+

    "," +

    coo2[1] +

    imgurl2;

// 51.157096880208634, 5.033412036915008
