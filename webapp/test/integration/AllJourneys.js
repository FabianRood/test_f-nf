jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"tns/reclamation/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"tns/reclamation/test/integration/pages/Worklist",
		"tns/reclamation/test/integration/pages/Object",
		"tns/reclamation/test/integration/pages/NotFound",
		"tns/reclamation/test/integration/pages/Browser",
		"tns/reclamation/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "tns.reclamation.view."
	});

	sap.ui.require([
		"tns/reclamation/test/integration/WorklistJourney",
		"tns/reclamation/test/integration/ObjectJourney",
		"tns/reclamation/test/integration/NavigationJourney",
		"tns/reclamation/test/integration/NotFoundJourney",
		"tns/reclamation/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});