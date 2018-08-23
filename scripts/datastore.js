(function (window) {
    'use strict';
// Здесь находится код
    var App = window.App || {};

    function DataStore() {
        // console.log('running the DataStore function');
        this.data = {};
    }
    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };
    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };
    DataStore.prototype.get = function (key) {
        return this.data[key];
    };
    DataStore.prototype.getAll = function () {
        return this.data;
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);