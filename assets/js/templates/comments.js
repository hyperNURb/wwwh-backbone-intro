var App = App || {};

(function() {
    var Comments = '<header class="media">\
                        <img src="assets/img/avatar.png" alt="">\
                        <section class="text">\
                            <a href="#" class="title">Spletne urice</a>\
                            <footer>\
                                <time>April 2, 2013 at 2:45pm</time> - <a href="#">Like</a>\
                            </footer>\
                        </section>\
                    </header>\
                    <section class="content">\
                        Ni za lajkat: Ta teden spletne urice odpadejo.\
                    </section>\
                    <ul class="comments">\
                        <li class="media">\
                            <img src="assets/img/avatar.png" alt="">\
                            <section class="text">\
                                <input type="text" name="comment" id="comment" placeholder="Write a comment">\
                            </section>\
                        </li>\
                    </ul>',
        SingleComment = Hogan.compile('<img src="assets/img/avatar.png" alt="">\
                                        <section class="text">\
                                             <a href="#" class="title">{{user}}</a> {{text}}\
                                            <footer>\
                                                <time>{{time}}</time> - <a href="#">Like</a>\
                                            </footer>\
                                        </section>');
    App.Templates = {};

    _.extend( App.Templates, {
        comments: Comments,
        singleComment: SingleComment
    });
}());
