Ext.define('ChebAfisha.cmp.header.Header', {
    extend: 'Ext.Container',
    xtype: 'header',
    controller: 'header',
    height: 56,
    cls: 'header',
    requires: [
        'ChebAfisha.cmp.header.HeaderController'
    ],
    listeners: {
        initialize: 'onReady'
    },
    items: [
        {
            xtype: 'button',
            cls: 'back',
            iconCls: 'fa fa-arrow-left left10',
            handler: 'onBack',
            text: 'Информация',
            flex: 1,
            width: '100%',
            labelCls: 'back-button-label'
        }
    ]

});
