// #####################################


// Клиент для карт
function ClientMap() {
}

ClientMap.prototype.init = function (options) {
  this.options = options;
};

// карта
function Map(id, options) {
  this.id = id;
  this.options = options;
  this.markers = [];
}

Map.prototype.addMarker = function (marker) {
  this.markers.push(marker);
};

Map.prototype.print = function () {
  console.log("Map have ", this.markers.length, " markers");
};

ClientMap.prototype.Map = Map;

// маркер на карте
function Marker(latitude, longitude) {
  this.latitude = latitude;
  this.longitude = longitude;
}

ClientMap.prototype.Marker = Marker;


// #####################################
