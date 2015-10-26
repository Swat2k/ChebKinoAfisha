Ext.define('ChebAfisha.cmp.header.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',

    getMainView: function () {
        return Ext.getCmp('main');
    },

    onReady: function () {
        var me = this,
            v = me.getView();


    },

    onBack: function () {
        this.getMainView().getActiveItem().destroy();
    }


});
