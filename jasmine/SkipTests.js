xdescribe('Skip several bad tests', function () {
    it('failing test 1', function () {
        expect(true).toBeFalsy();
    });
    it('failing test 2', function () {
        expect(false).toBeTruthy();
    });
});
describe('Skip one bad test', function () {
    it('should be 2', function () {
        expect(1 + 1).toBe(2);
    });
    xit('skipping bad test', function () {
        expect(5 / 0).toBe(5);
    });
});
