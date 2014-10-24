// Поскольку в javascript нет интерфейсов,
// Опишем полностью абстрактный класс Картографа
function AbstractMapService() {
}

AbstractMapService.prototype = {
  createMap: function(id, options) {
      throw new TypeError("Method not implemented");
  },

  createMapMarker: function(map, options) {
      throw new TypeError("Method not implemented");
  }
};

// Какая либо стратегия наследования
AbstractMapService.extend = function(prototypeProperties) {
  var parent = this;
  var child = function () {
    return this.constructor.apply(this, arguments);
  };

  child.prototype = new parent();
  child.prototype.constructor = child;
  _.extend(child.prototype, prototypeProperties);
  return child;
};