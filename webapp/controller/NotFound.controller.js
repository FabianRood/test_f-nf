sap.ui.define([
		"tns/reclamation/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("tns.reclamation.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);