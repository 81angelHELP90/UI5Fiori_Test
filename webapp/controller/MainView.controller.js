sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.MainView", {
            onInit: function () {
               const oJsonModel = new sap.ui.model.json.JSONModel();
               const oView = this.getView(); //retorna una isntancia de la vista vinculada a este controller
               
                oJsonModel.loadData("./model/SelecionScreenMenu.json"); //colocamos ./ porque en el index.html indicamos "resourceroots" como ./
                oView.setModel(oJsonModel, "selectionScreen"); //Esto hace posible usar el modelo en la vista a traves del identificador "selectionScreen"
            },

            onFiter: function(){

            },

            onClearFilters: function(){
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");  
            }
        });
    });
