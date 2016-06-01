describe('FirstTestsClass', function () {
    beforeEach(function () {
        jasmine.addMatchers({
            toBeSeven: function () {
                return {
                    compare: function (actual, expected) {
                        var result = {
                            pass: actual === 7
                        };
                        if (result.pass) {
                            result.message = "It's ok";
                        } else {
                            result.message = "It's not 7";
                        }
                        return result;
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
