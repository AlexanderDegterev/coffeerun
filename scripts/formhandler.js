(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
    // Здесь будет находиться код
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    function FormHandler() {
    // Здесь будет находиться код
    }
    App.FormHandler = FormHandler;
    window.App = App;
})(window);