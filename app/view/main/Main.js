Ext.define('ChebAfisha.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    id: 'main',
    controller: 'main',
    viewModel: 'main',

    requires: [
        'Ext.MessageBox',
        'ChebAfisha.view.main.MainController',
        'ChebAfisha.view.main.MainViewModel',
        'ChebAfisha.view.show.Show'
    ],
    layout :{
        type: 'card'
    },
    items: [
        {
            xtype: 'tabpanel',
            itemId: 'tabpanel',
            tabBarPosition: 'bottom',
            defaults: {
                tab: {
                    iconAlign: 'top'
                }
            },
            tabBar: {
                docked: 'bottom',
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },
                height: 72
            }
        }
    ],

    listeners: {
        initialize: 'onReady'
    }

});
