var xhrWrapper = {
    get: function () {
        console.log('get');
    },
    save: function () {
        console.log('save');
    }
};

describe('sandbox', function () {
    afterEach(function () {
        console.log('sandbox restored');
        xhrWrapper.get();
        xhrWrapper.save();
    });

    it('global variables not affected after test run', function () {
        var sandbox = sinon.sandbox.create();

        console.log('in sandbox');
        sandbox.stub(xhrWrapper);
        xhrWrapper.get();
        xhrWrapper.save();

        sandbox.restore();
    });

    it('another way to create sandbox', sinon.test(function () {
        console.log('in sandbox');
        this.stub(xhrWrapper);
        xhrWrapper.get();
        xhrWrapper.save();
    }))
});
