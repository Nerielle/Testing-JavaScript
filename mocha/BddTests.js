describe('bdd style tests', function () {
    beforeEach(function () {
        console.log('beforeEach');
    });
    before(function () {
        console.log('before');
    })
    afterEach(function () {
        console.log('afterEach');
    });
    after(function () {
        console.log('after');
    });

    it('test 1', function () {
        expect(1).to.equal(1);
    });
    describe('inner suite', function () {
        it('test 2', function () {
            expect(1).to.equal(1);
        });
    });

})
