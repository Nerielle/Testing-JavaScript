suite('tdd style tests', function () {
    suiteSetup(function () {
        console.log('suiteSetup');
    });
    setup(function () {
        console.log('setup before each test');
    })
    teardown(function () {
        console.log('teardown after each test');
    });
    suiteTeardown(function () {
        console.log('suiteTeardown');
    });

    test('test 1', function () {
        expect(1).to.equal(1);
    });
    test('test 2', function () {
        expect(1).to.equal(1);
    });
})
