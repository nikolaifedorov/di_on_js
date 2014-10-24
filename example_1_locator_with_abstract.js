// Метод отображения пользователей
Locator.prototype.locateUsers = function(users) {
    var map, mapService;

    // создаем Картографа
    mapService = new MapService({
        token: "my-application-token"
    });

    // создаем карту
    map = mapService.createMap('my_dom_node_id', {
        lat:  55,
        long: 37,
        zoom: 10
    });

    // Бежим по всем пользователям, создаем маркеры
    users.forEach(function(user) {
        mapService.createMapMarker(map, {
            lat:  user.latitude,
            long: user.longitude
        });
    });

    return map;
};