Ext.define('ChebAfisha.view.main.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    GetAllSeansByDateStore: function () {
        return Ext.StoreManager.lookup('ChebAfisha.store.GetAllSeansByDate');
    },

    fetchDataForMain: function () {
        var me = this,
             v = me.getView(),
             c = v.getController();

        var current_date = Ext.Date.format(new Date(), 'Y-m-d');

        me.GetAllSeansByDateStore().load({
            params: { date: current_date },
            callback: function (records, options, success) {
                if (success) {
                    c.fetchDataDone(records);
                } else {
                    Ext.Msg.alert('Сообщение', 'Сервер недоступен, попробуйте позднее');
                }
            }
        });
    }

});