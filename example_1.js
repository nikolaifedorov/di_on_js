// Наш работник с картами
function Locator() {
}

Locator.prototype.locateUsers = function(users) {
  var map;

  // загружаем сервис
  var client = new ClientMap();

  // Инициализируем сервис
  client.init({
    token: "my-application-token"
  });

  // создаем карту
  map = new client.Map('my_dom_node_id', {
      center: [55, 37],
      zoom:   10
  });

  // Бежим по всем пользователям, создаем маркеры
  users.forEach(function(user) {
      var marker;
      marker = new client.Marker(user.geo.latitude, user.geo.longitude);
      map.addMarker(marker);
  });

  return map;
};



// #####################################


var users = [
  {
    name: "User1",
    geo: {
      latitude: 40,
      longitude: 50
    }
  },
  {
    name: "User1",
    geo: {
      latitude: 20,
      longitude: 30
    }
  }
];



 /*
  *
  * Eсли мы захотим использовать другой сервис карт,
  * нам придется переписать большую часть кода Locator.
  * Переписываем: 
  *   загрузку клиента
  *   его инициализацию
  *   общение с API нового клиента
  *
  * Причина такой ситуации в том, в ответственности Locator-а 
  * не только функция локации пользователей, 
  * но и функции создания, конфигурации и общения с клиентом карт.
  *
  */