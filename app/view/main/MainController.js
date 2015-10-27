Ext.define('ChebAfisha.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onReady: function () {
        var me = this,
             v = me.getView(),
            vm = v.getViewModel();

        Ext.Viewport.setMasked(true);
        vm.fetchDataForMain();
    },

    AddTabElemet: function(title, type, arr ) {
        this.getView().add({
            title: title,
            iconCls: 'icon-' + type,
            items: [
                {
                    xtype: 'app-show',
                    dataArray: arr,
                    theater: type
                }
            ]
        });
    },

    fetchDataDone: function (records) {
        var me = this,
             v = me.getView(),
            cinema4ya_arr   = [],
            volga_arr       = [],
            kascad_arr      = [],
            luxor_arr       = [],
            tripingvina_arr = [];


        records.forEach(function (el) {
            var data = el.getData(),
                current_datetime = new Date(),
                seans_datetime = new Date(data.seans_date_time),
                seans_datetime = new Date(Date.UTC(seans_datetime.getFullYear(), seans_datetime.getMonth(), seans_datetime.getDate(), seans_datetime.getHours(), seans_datetime.getMinutes() + seans_datetime.getTimezoneOffset()*2 , seans_datetime.getSeconds()));

            if (current_datetime > seans_datetime) {
                return false;
            }

            if (data.theater_type == 'cinema4ya') {
                cinema4ya_arr.push(data);
            }

            if (data.theater_type == 'volga') {
                volga_arr.push(data);
            }

            if (data.theater_type == 'kaskad') {
                kascad_arr.push(data);
            }

            if (data.theater_type == 'luxor') {
                luxor_arr.push(data);
            }

            if (data.theater_type == 'tripingvina') {
                tripingvina_arr.push(data);
            }
        });

        me.AddTabElemet('Синема 5'    , 'cinema4ya'  , cinema4ya_arr);
        me.AddTabElemet('Волжский'    , 'volga'      , volga_arr);
        me.AddTabElemet('Каскад'      , 'kaskad'     , kascad_arr);
        me.AddTabElemet('Мир луксор'  , 'luxor'      , luxor_arr);
        me.AddTabElemet('Три пингвина', 'tripingvina', tripingvina_arr);


        Ext.Viewport.setMasked(false);
    }
});
