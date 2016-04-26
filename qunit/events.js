module("Events");
QUnit.log = function(args){
    console.log("passed an assert " + args.result);
};
QUnit.testStart = function(args){
    console.log("testStart " + args.name);
};
QUnit.testDone= function(args){
    console.log("testDone " + args.name);
};
QUnit.moduleStart= function(args){
    console.log("moduleStart " + args.name);
};
QUnit.moduleDone= function(args){
    console.log("moduleDone " + args.name);
};
QUnit.begin= function(args){
    console.log("begin(started all tests) " + args.name);
};QUnit.done= function(args){
    console.log("done(finished all tests) " + args.passed + '/' + args.total);
};
test('test events', function () {
    ok(true);
});
test('test events 2', function () {
    ok(true);
});