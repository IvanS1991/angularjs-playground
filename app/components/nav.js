class NavController {
  constructor () {
    this.baseHref = '#!';
  }

  $onInit () {
    this.buttons = [
      this.getButton('Home'),
      this.getButton('About'),
      this.getButton('Contacts'),
      this.getButton('Gallery'),
    ];
  }

  getButton (label) {
    return {
      label,
      href: `${this.baseHref}/${label.toLowerCase()}`
    };
  }
}

angular.module('myApp').component('navComponent', {
  templateUrl: 'app/views/components/nav.html',
  controller: NavController,
  controllerAs: 'navComponent'
});
