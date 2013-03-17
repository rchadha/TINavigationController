//create a selfcalling function
(function(){
	
	var PF = {};
	PF.ui = require('ui/ui');
	
	PF.ui.controller = new PF.ui.NavigationController();
	PF.ui.mainWindow = new PF.ui.ApplicationWindow(PF.ui.controller);
	
	
	PF.ui.controller.open(PF.ui.mainWindow);
	
	//PF.ui.mainWindow.open();
	
	
	//PF.ui = require('ui/NavigationController').NavigationController;
	//PF.ui.TestWindow = require('TestWindow').TestWindow;

//create NavigationController which will drive our simple application
//PF.ui.NavigationController.controller = new PF.ui.NavigationController();

//open initial window
//controller.open(new TestWindow(controller));
	//ui namespace extends the app's PF namespace object
	//Require returns JavaScript object with properties, functions...
	//PF.ui = require('ui/ApplicationWindow');
	//PF.ui.DisplayName('Rishab');
	
	//PF.ui.mainWindow = new PF.ui.ApplicationWindow();
	
	//PF.ui.mainWindow.open();
	
	//MODULE.EXPORTS: Commonly used for functions which acts as object constructors.
	//var Person = require('ui/Person');
	//var fred = new Person('Rishab', 'Chadha');
	//fredsName = fred.fullName();
	//alert(fredsName);
	
})();
