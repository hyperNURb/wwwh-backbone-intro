var App = App || {};

(function() {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home'
        },
        home: function() {
            $('body').append( new App.Comments().render().el );
        }
    });

    App.Router = new Router();
    Backbone.history.start();
}());
