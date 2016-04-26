test('expect asserts',3, function () {
    ok(true);
    ok(true);
});
test('expect asserts another way', function () {
    expect(3);
    ok(true);
    ok(true);
});