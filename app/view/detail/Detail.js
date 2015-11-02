Ext.define('ChebAfisha.view.detail.Detail', {
    extend: 'Ext.Container',
    xtype: 'app-detail',
    controller: 'detail',
    cls: 'detail',
    rec: null,
    viewModel: 'detail',
    height: '100%',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: {
        direction: 'vertical',
        indicators: false
    },
    requires: [
        'ChebAfisha.view.detail.DetailController',
        'ChebAfisha.view.detail.DetailViewModel'
    ],
    listeners: {
        initialize: 'onReady'
    },
    items: [
        {
            xtype: 'header'
        }, {
            xtype: 'container',
            itemId: 'movietitle',
            cls: 'movietitle'
        }, {
            xtype: 'container',
            layout: 'hbox',
            cls: 'detail1',
            items: [
                {
                    xtype: 'container',
                    itemId: 'date_released'
                }, {
                    xtype: 'spacer'
                }, {
                    xtype: 'container',
                    itemId: 'film_format'
                }
            ]
        }, {
            xtype: 'container',
            layout: 'hbox',
            cls: 'detail1',
            itemId: 'genre'
        }, {
            xtype: 'container',
            cls: 'detail1',
            layout: 'hbox',
            items: [
                {
                    xtype: 'spacer'
                }, {
                    xtype: 'container',
                    itemId: 'poster'
                }, {
                    xtype: 'spacer'
                }
            ]
        }, {
            xtype: 'container',
            layout: 'hbox',
            cls: 'detail1',
            itemId: 'genre'
        }, {
            xtype: 'container',
            cls: 'detail1',
            itemId: 'duration'
        }, {
            xtype: 'container',
            cls: 'detail1',
            itemId: 'director'
        }, {
            xtype: 'container',
            cls: 'detail1',
            itemId: 'actors'
        }, {
            xtype: 'container',
            cls: 'detail1',
            itemId: 'kinopoisk_rating'
        }, {
            xtype: 'container',
            cls: 'detail1',
            itemId: 'description'
        }

    ]
});
