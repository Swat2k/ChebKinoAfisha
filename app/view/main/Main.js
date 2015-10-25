Ext.define('ChebAfisha.view.main.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',
    tabBarPosition: 'bottom',
    requires: [
        'Ext.MessageBox',
        'ChebAfisha.view.main.MainController',
        'ChebAfisha.view.main.MainViewModel',
        'ChebAfisha.view.show.Show'
    ],
    tabBar: {
        docked: 'bottom',
        scrollable: {
            direction: 'horizontal',
            indicators: false
        },
        height: 72
    },

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    items: [
        //{
        //    title: 'Синема 5',
        //    iconCls: 'user',
        //    itemId: 'cinama4ya',
        //}, {
        //    title: 'Волжский',
        //    iconCls: 'user',
        //    itemId: 'volga'
        //}, {
        //    title: 'Каскад',
        //    iconCls: 'user',
        //    itemId: 'kaskad'
        //}, {
        //    title: 'Мир луксор',
        //    iconCls: 'user',
        //    itemId: 'luxor'
        //}, {
        //    title: 'Три пингвина',
        //    iconCls: 'user',
        //    itemId: 'tripingvina'
        //}
    ],

    listeners: {
        initialize: 'onReady'
    }


});
