sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "dk/atp/sap/test/minapp3/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("dk.atp.sap.test.minapp3.Component", {
            metadata: {
                manifest: "json"
            },
            
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                this.getModel().setUseBatch(false);
            }
        });
    }
);