module('Async tests');
test('async timing test 1', function () {
    //stop tells Qunit to pause running tests untill notified.
    stop();
    setTimeout(function () {
        ok(true);
        //start tells Qunit to resume running the tests.
        start();
    }, 100);
});

test('async timing test 2', function () {
    stop();
    stop();
    setTimeout(function () {

        ok(true);
        console.log('timeout is: 2000');
        start();
    }, 2000);
    setTimeout(function () {
        ok(true);
        console.log('timeout is: 100');
        start();
    }, 100);
});
