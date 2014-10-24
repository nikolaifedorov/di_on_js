// Имплементация интерфейса
var MapService = AbstractMapService.extend({
  
  constructor: function(options) {
    var client = new ClientMap();

    client.init({
        token: options.token
    });

    this.client = client;
  },

  createMap: function(id, options) {
    return new this.client.Map(id, {
      center: [options.lat, options.long],
      zoom:   options.zoom
    });
  },

  createMapMarker: function(map, options) {
    var marker;

    marker = new this.client.Marker(options.lat, options.long);
    map.addMarker(marker);

    return marker;
  }
});