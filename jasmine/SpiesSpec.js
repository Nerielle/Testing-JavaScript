var Sut =
    function Sut() {
        var self = this;
        this.callingCallback = function (cb) {
            cb();
        };
        this.getNumber = function () {
            return 5;
        };
        this.doSomething = function () {
            console.log('doSomething');
        };
    };

describe('Spies', function () {
    var sut;
    beforeEach(function () {
        sut = new Sut();

    });
    it('spy on callback', function () {
        var spy = jasmine.createSpy('spy');
        sut.callingCallback(spy);
        expect(spy).toHaveBeenCalled();
    });
    it('spy on method of existing object', function () {
        var spy = spyOn(sut, 'doSomething');

        sut.doSomething();

        expect(spy).toHaveBeenCalled();
    });

    it('mocking return value', function () {
        var spy = spyOn(sut, 'getNumber').and.returnValue(10);

        expect(sut.getNumber()).toEqual(10);
    });
});
