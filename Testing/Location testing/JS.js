navigator.geolocation.getCurrentPosition(function(position) {
  gps_long = position.coords.latitude
  gps_lat = position.coords.longitude
  console.log(gps_long);
  console.log(gps_lat);
});