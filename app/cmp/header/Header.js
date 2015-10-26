Ext.define('ChebAfisha.cmp.header.Header', {
    extend: 'Ext.Container',
    xtype: 'header',
    controller: 'header',
    height: 56,
    requires: [
        'ChebAfisha.cmp.header.HeaderController'
    ],
    listeners: {
        initialize: 'onReady'
    },
    items: [
        {
            xtype: 'button',
            width: 90,
            text: 'back',
            handler: 'onBack'
        }
    ]

});
