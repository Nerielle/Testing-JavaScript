describe('sinon fake timers', function () {
    var sut = {
        doTimeout: function (cb) {
            setTimeout(cb, 1000);
        }
    };
    var clock = {};
    beforeEach(function () {
        clock = sinon.useFakeTimers();

    });

    it('fake timer with setTimeout', function () {
        var spy = sinon.spy();
        sut.doTimeout(spy);
        clock.tick(1010);
        expect(spy.called).toBe(true);
    });
    afterEach(function () {
        clock.restore();
    });
});
