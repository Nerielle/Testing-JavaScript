describe('sinon matchers', function () {
    it('should pass with matchers', function () {
        var spy = sinon.spy();
        spy('1234');
        spy.calledWithMatch(sinon.match('1'));

        var obj = {
            prop: 1
        };
        spy(obj);
        spy.calledWithMatch(sinon.match.same(obj));
        spy.calledWithMatch(sinon.match.has('prop'));
        spy.calledWithMatch(sinon.match.has('prop', 1));
    });
});
