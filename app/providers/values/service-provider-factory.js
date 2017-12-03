angular.module('myApp').value('difference', `
Service - the provided function is invoked as a constructor - new Service()
Factory - the provided function is invoked as a function and the return value is injected - Factory()
Provider - the provided function is invoked as a constructor, and then an attempt is made for a $get method to be invoked from the created instance - (new Provider()).$get()`);
