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
    describe.only('inner suite - exclusive run', function () {
        it.skip('test 2 : skipped', function () {
            expect(1).to.equal(1);
        });
        it('test 3', function () {
            expect(1).to.equal(1);
        })
    });

})
