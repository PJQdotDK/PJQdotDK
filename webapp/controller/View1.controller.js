sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("dk.atp.sap.test.minapp3.controller.View1", {

            onShowHello: function () { 
                sap.m.MessageToast.show("This message should appear in the message toast");
             },

        });
    });
