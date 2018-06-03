function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(31.8081183,34.7908789); 
  // var myLatLng = {lat: 31.8081183, lng: 34.7908789};

  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}