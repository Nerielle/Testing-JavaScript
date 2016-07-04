var Sut =
    function Sut() {
        var self = this;
        this.callingCallback = function (cb) {
            cb();
        };
    };

describe('Spies', function () {
    var sut, spy = null;
    beforeEach(function () {
        sut = new Sut();

    });
    it('spy on callback', function () {
        spy = jasmine.createSpy('spy');
        sut.callingCallback(spy);
        expect(spy).toHaveBeenCalled();
    });
});
