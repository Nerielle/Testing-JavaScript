describe('Sinon spies', function () {
    var sut;
    beforeEach(function () {
        sut = new Sut();
    });
    it('should spy on a callback', function () {
        var spy = sinon.spy();

        sut.callingCallback(spy);

        expect(spy.called).toBe(true);
    });

    it('should call real function and spy on it', function () {
        var foo = {
            realCb: function () {
                return 'Great Job!';
            }
        };
        var spy = sinon.spy(foo.realCb);

        var result = sut.callingCallbackWithReturnValue(spy);

        expect(spy.called).toBe(true);
        expect(result).toBe('Great Job!');
    });

    it('spy on a method of an object', function () {
        var spy = sinon.spy(dependency, 'someMethod');

        var result = sut.callDependencyMethod(dependency);

        expect(spy.called).toBe(true);
        expect(result).toBe('dependency');
    });
});
