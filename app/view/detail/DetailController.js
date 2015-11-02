Ext.define('ChebAfisha.view.detail.DetailController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.detail',

    getTitleField: function () {
        return this.getView().down('#movietitle');
    },

    getDateRelease: function () {
        return this.getView().down('#date_released');
    },

    getFilmFormat: function () {
        return this.getView().down('#film_format');
    },

    getGenreField: function () {
        return this.getView().down('#genre');
    },

    getPosterField: function() {
        return this.getView().down('#poster');
    },

    getDirectorField: function () {
        return this.getView().down('#director');
    },

    getDuretionField: function () {
        return this.getView().down('#duration');
    },

    getActorsField: function () {
        return this.getView().down('#actors');
    },

    getKinoPoiskRatingField: function () {
        return this.getView().down('#kinopoisk_rating');
    },

    getDescriptionField: function() {
        return this.getView().down('#description');
    },


    FillFields: function (data) {
        var me    = this,
            title = me.getTitleField(),
            daterelease = me.getDateRelease(),
            filmFormat  = me.getFilmFormat(),
            genre       = me.getGenreField(),
            poster      = me.getPosterField(),
            director    = me.getDirectorField(),
            duration    = me.getDuretionField(),
            actors      = me.getActorsField(),
            kinopois_rating = me.getKinoPoiskRatingField(),
            description = me.getDescriptionField();

        //debugger;

        title.setHtml(data.movietitle);
        daterelease.setHtml('Дата выхода: ' + data.date_released);
        filmFormat.setHtml('Формат: ' + data.film_format);
        genre.setHtml('Жанр: ' + data.genre);
        poster.setHtml('<img src="' + data.poster_small + '">');
        duration.setHtml('Длительность: ' + data.duration + ' мин.');
        director.setHtml('Режисер: ' + data.director_film);
        actors.setHtml('Актёры: ' + data.actors);
        kinopois_rating.setHtml('Рейтинг в кинопоиске: ' + data.kinopoisk_rating);
        description.setHtml('Описание: ' + data.description);

    },

    onReady: function () {
        var me = this,
            v = me.getView();


        me.FillFields(v.rec.getData());
    }

});
