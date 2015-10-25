Ext.define('ChebAfisha.store.GetAllSeansByDate', {
    extend: 'Ext.data.Store',
    alias: 'store.GetAllSeansByDate',
    proxy: {
        type: 'ajax',
        url: "http://4edz.ru/kino/getallseansbydate.php",
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

