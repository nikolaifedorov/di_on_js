// Метод внедрения Картографа
Locator.prototype.setMapService = function(mapService) {
  if (!(mapService instanceof MapService)) {
    throw new TypeError("MapService is expected");
  }

  this.mapService = mapService;
};


// Теперь наш локатор выглядит так:
// Метод отображения пользователей
Locator.prototype.locateUsers = function(users) {
  var that = this,
      map;

  // создаем карту
  map = this.mapService.createMap('my_dom_node_id', {
    lat:  55,
    long: 37,
    zoom: 10
  });

  // Бежим по всем пользователям, создаем маркеры
  users.forEach(function(user) {
    that.mapService.createMapMarker(map, {
      lat:  user.latitude,
      long: user.longitude
    });
  });
};