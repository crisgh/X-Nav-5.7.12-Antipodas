function comprobar() {
var  p1 = document.getElementById("mostrar");
  if (Modernizr.geolocation) {
     p1.innerHTML = "NOTA : geolocalizacion soportado";
     navigator.geolocation.getCurrentPosition(showPosition);

  }else{
     p1.innerHTML = "geolocalizacion no soportado";
  }
}
var lat = 0;
var lng = 0;
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    initMap();
    lat = lat * (-1);
    lng = 180 + lng;
    antipodas();
}
function initMap(){
  var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
      center: {lat: lat , lng: lng },
      zoom: 15
    });
}
function antipodas(){
  var mapDiv = document.getElementById("antipodas");
  var map = new google.maps.Map(mapDiv, {
    center: {lat: lat , lng: lng },
    zoom: 15
  });
}
