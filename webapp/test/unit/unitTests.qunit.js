/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dkatp.sap.test./minapp3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
