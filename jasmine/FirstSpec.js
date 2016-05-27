describe('FirstTestsClass', function () {
    beforeEach(function () {
        jasmine.addMatchers({
            toBeSeven: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: actual === 7
                        };
                    }
                };
            }
        });
    });

    it('should be true', function () {
        expect(true).toBeTruthy();
    });
    it('should be seven', function () {
        expect(7).toBeSeven();
    });

});
