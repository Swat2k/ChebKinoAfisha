Ext.define('ChebAfisha.model.SeansModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id',               type: 'string' },
        { name: 'actors',           type: 'string' },
        { name: 'argument',         type: 'string' },
        { name: 'content_rating',   type: 'string' },
        {
            name: 'date_released', type: 'string', convert: function (value, record) {
                return Ext.Date.format(new Date(value), 'd.n.Y');
            }
        },
        {
            name: 'date_seans', type: 'string', convert: function (value, record) {
                return Ext.Date.format(new Date(value), 'd.n.Y');
            }
        },
        { name: 'description',      type: 'string' },
        { name: 'director_film',    type: 'string' },
        { name: 'duration',         type: 'string' },
        { name: '',      type: 'string' },

        {
            name: 'film_format', type: 'string', convert: function (value, record) {
                if (Ext.isEmpty(value))
                    return "-"
                else
                    return value
            }
        },
        { name: 'genre',            type: 'string' },
        { name: 'kinopoisk_link',   type: 'string' },
        { name: 'kinopoisk_rating', type: 'string' },
        { name: 'movietitle',       type: 'string' },
        { name: 'poster_full_url',  type: 'string' },
        { name: 'poster_midle_url', type: 'string' },
        { name: 'poster_small',     type: 'string' },
        { name: 'seans_date_time',  type: 'string' },
        { name: 'ticker_id',        type: 'string' },
        {
            name: 'time_seans',        type: 'string', convert: function (value, record) {
            return value.slice(0, -3);
        }
        },
        { name: 'year',             type: 'string' },
        {
            name: 'min_price',        type: 'string', convert: function (value, record) {
                return value.slice(0, -2);
            }
        },
        {
            name: 'max_price',        type: 'string', convert: function (value, record) {
                return value.slice(0, -2);
            }
        },
        { name: 'theater_type',     type: 'string' }
    ]
});

