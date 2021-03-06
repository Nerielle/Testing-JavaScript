describe('bdd style tests', function () {
    mocha.setup({
        globals: ['globalIgnore']
    });

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
        globalIgnore = 7;
        expect(1).to.equal(1);
    });
    describe('inner suite - exclusive run', function () {
        it.skip('test 2 : skipped', function () {
            expect(1).to.equal(1);
        });
        it('test 3', function () {
            global = 3;
            expect(1).to.equal(1);
        })
    });
    describe('async tests', function () {
        it('should be async', function (done) {
            setTimeout(function () {
                    expect(1).to.equal(1);
                    done();
                },
                10)
        });

        it('should timed out by mocha (default 2s)', function (done) {
            setTimeout(function () {
                    expect(1).to.equal(1);
                    done();
                },
                2200)
        });
        it('should pass', function (done) {
            this.timeout(3000);
            setTimeout(function () {
                    expect(1).to.equal(1);
                    done();
                },
                2500)
        });
    });

})
