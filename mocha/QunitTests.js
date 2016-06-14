suite('tdd style tests');
beforeEach(function () {
    console.log('beforeEach');
});

afterEach(function () {
    console.log('teardown');
});
before(function () {
    console.log('before');
});

after(function () {
    console.log('after');
});

test('test 1', function () {
    expect(1).to.equal(1);
});
test('test 2', function () {
    expect(1).to.equal(1);
});
