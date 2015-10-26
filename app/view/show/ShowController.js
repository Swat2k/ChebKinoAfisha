Ext.define('ChebAfisha.view.show.ShowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.show',

    getList: function () {
      return this.getView().down('#list');
    },

    getMainView: function () {
        return Ext.getCmp('main');
    },

    createInternalStore: function (data) {
        var me = this,
             v = me.getView();

        v.store  = Ext.create('Ext.data.Store',{
            model : 'ChebAfisha.model.SeansModel',
            data: data,
            sorters: [{
                property: 'time_seans',
                direction: 'ASC'
            }]
        });
    },

    onReady: function () {
        var me = this,
             v = me.getView();

        me.createInternalStore(v.dataArray);

        me.getList().setStore(v.store);

    },

    onItemTap: function (scope, index, target, record, e, eOpts) {
        this.getMainView().setActiveItem({
            xtype : 'app-detail'
        });
    }

});
