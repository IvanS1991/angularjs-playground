// Factories

// Syntax: module.factory( 'factoryName', function );
// Result: When declaring factoryName as an injectable argument you will be provided with the value that is returned by invoking the function reference passed to module.factory.

// Module / Revealing module pattern

// Registers the factory to the myApp module
angular.module('myApp').factory('btnFactory', function () {
  // Private stuff
  const notVisible = true; // Not visible from the outside

  // Public stuff
  const get = (baseHref, label) => {
    return {
      label,
      href: `${baseHref}/${label.toLowerCase()}`
    };
  };

  return {
    get,
  };
});
