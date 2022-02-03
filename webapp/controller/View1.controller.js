sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator ) {
        "use strict";

        return Controller.extend("dk.atp.sap.test.minapp3.controller.View1", {

            onShowHello: function () {
//                var beskrivelse = this.getView().getModel("oModel").getProperty("/readonly/beskrivelse");
                sap.m.MessageToast.show("This message should appear in the message toast");
             },
             
            onFilterItems: function (oEvent) { 
                var aFilter = [],
                sQuery = oEvent.getParameter("query"),
                oList = this.getView().byId("_idTable2"),
                oBinding = oList.getBinding("items");
                if (sQuery) {
                    aFilter.push(new Filter("int_aktart", FilterOperator.Contains, sQuery));
                }
                oBinding.filter(aFilter);    
             },

            onItemSelected: function (oEvent) { 
                var oSelectedItem = oEvent.getParameter("listItem");
                var oContext = oSelectedItem.getBindingContext();
                var sPath = oContext.getPath();
                var oPanel = this.byId("DetailsPanel");
                oPanel.bindElement({path: sPath });
                oPanel.setVisible(true);
            },

        });
    });
