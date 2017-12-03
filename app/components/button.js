class BtnController {
  constructor () {
    this.label = null;
    this.href = null;
  }
}

angular.module('myApp').component('btnComponent', {
  templateUrl: 'app/views/components/button.html',
  controller: BtnController,
  controllerAs: 'btnController',
  bindings: {
    label: '<',
    href: '<'
  },
});
