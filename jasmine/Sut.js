var Sut = function Sut() {
    var self = this;
    this.callingCallback = function (cb) {
        cb();
    };
    this.callingCallbackWithReturnValue = function (cb) {
        return cb();
    };
    this.callDependencyMethod = function (dep) {
        return dep.someMethod();
    };
    this.getNumber = function () {
        return 5;
    };
    this.doSomething = function () {
        console.log('doSomething');
    };
};
var dependency = {
    someMethod: function () {
        return 'dependency';
    }
};
