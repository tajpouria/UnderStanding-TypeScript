var myMap = /** @class */ (function () {
    function myMap() {
        this._map = {};
        this._itemNoteFoud = 'There is no item specified by the given key.';
    }
    myMap.prototype.setItems = function (key, item) {
        return this._map.key = item;
    };
    myMap.prototype.getItem = function (key) {
        return this._map.key;
    };
    myMap.prototype.clearItem = function (key) {
        !this._map[key] ? new Error(this._itemNoteFoud) : delete this._map[key];
    };
    myMap.prototype.printItems = function () {
        return this._map;
    };
    return myMap;
}());
var map1 = new myMap();
map1.setItems('pou', 'taj');
console.log(map1.getItem('pou'));
map1.clearItem('pou');
map1.printItems();
