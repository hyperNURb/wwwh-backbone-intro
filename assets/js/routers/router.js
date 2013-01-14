var App = App || {};

(function() {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'home'
        },
        home: function() {
            var Comments = new App.Comments({
                        collection: new App.Collection()
                    });

            $('body').append( Comments.render().el );
        }
    });

    App.Router = new Router();
    Backbone.history.start();
}());
