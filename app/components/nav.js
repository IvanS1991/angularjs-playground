// navComponent's controller
class NavController {
  constructor (baseHref, btnFactory) { // Inject baseHref value
    this.baseHref = baseHref;
    this._buttons = btnFactory;
  }

  // Sets buttons on component initialization
  $onInit () {
    this.buttons = [
      this.getButton('Home'),
      this.getButton('About'),
      this.getButton('Contacts'),
      this.getButton('Gallery'),
    ];
  }

  getButton (label) {
    return this._buttons.get(this.baseHref, label);
  }
}

// Registers the component to the myApp module, using the provided template, controller and controller alias
angular.module('myApp').component('navComponent', {
  templateUrl: 'app/views/components/nav.html', // Template
  controller: NavController, // Controller
  controllerAs: 'navComponent' // Controller alias
});
