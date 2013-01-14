var App = App || {};

(function() {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home'
        },
        home: function() {
            console.log('HOMEPAGE', arguments);
        }
    });

    App.Router = new Router();
    Backbone.history.start();
}());
