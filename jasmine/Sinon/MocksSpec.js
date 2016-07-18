describe('sinon mocks', function () {
    it('should buy', function () {
        var stock = sinon.stub(new Stock());
        var participant = new Participant();
        var mock = sinon.mock(participant);
        var expectation = mock.expects('buy').once();
        stock.analyze.returns(true);

        participant.participate(stock);

        expectation.verify();
    });

});
