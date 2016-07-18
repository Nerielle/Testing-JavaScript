describe('sinon stubs', function () {
    it('should buy', function () {
        var stock = sinon.stub(new Stock());
        var participant = new Participant();
        sinon.stub(participant, 'buy');
        sinon.stub(participant, 'trade');
        stock.analyze.returns(true);

        participant.participate(stock);

        sinon.assert.callCount(participant.buy, 1);
        sinon.assert.callCount(participant.trade, 0);
    });
    it('should trade', function () {
        var stock = sinon.stub(new Stock());
        var participant = new Participant();
        sinon.stub(participant, 'buy');
        sinon.stub(participant, 'trade');
        stock.analyze.returns(false);

        participant.participate(stock);

        sinon.assert.callCount(participant.trade, 1);
        sinon.assert.callCount(participant.buy, 0);
    });
});
