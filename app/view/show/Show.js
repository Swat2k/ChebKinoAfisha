Ext.define('ChebAfisha.view.show.Show', {
    extend: 'Ext.Container',
    xtype: 'app-show',
    controller: 'show',
    viewModel: 'show',
    height: '100%',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: {
        direction: 'vertical',
        indicators: false
    },
    dataArray: null,
    theater: null,
    requires: [
        'ChebAfisha.view.show.ShowController',
        'ChebAfisha.view.show.ShowViewModel',
        'ChebAfisha.view.detail.Detail'
    ],
    listeners: {
        initialize: 'onReady'
    },
    items: [
        {
            xtype: 'list',
            itemId: 'list',
            flex: 1,
            itemTpl: new Ext.XTemplate(
                '<div class = "seans">',
                '  <div class = "title">{movietitle}</div>' ,
                '  <div class = "datetime">Сеанс: {date_seans} {time_seans}</div>',
                '  <tpl if="min_price != \'\'">',
                '     <tpl if="min_price == max_price">',
                '        <div class = "price">Цена: {max_price} руб.</div>',
                '     <tpl else>',
                '        <div class = "price">Цена: от {min_price} до {max_price} руб.</div>',
                '     </tpl>',
                '  </tpl>',
                '</div>'
            ),
            listeners: {
                itemtap : 'onItemTap',
                taphold : 'onTapHold'
            }
        }
    ]

});
