Ext.define('ChebAfisha.view.detail.Detail', {
    extend: 'Ext.Container',
    xtype: 'app-detail',
    controller: 'detail',
    cls: 'detail',
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
        }
    ]

});
