module('module 1',{
 setup: function () {
     $('body').append('<div id="testDiv">some text</div>');
 },
    teardown: function () {
        $('#testDiv').remove();
    }
});

test('DOM test1', function () {
    strictEqual(sut.readDiv(), 'some text');
});
module('module 2',{
    setup: function(){
        //any DOM manipulation or something else ..
        $('body').append('<div id="testDiv">some different text</div>');
    },
    teardown: function () {
        //any DOM manipulation or something else ..
        $('#testDiv').remove();
    }

});
test('DOM test2', function () {
    strictEqual(sut.readDiv(), 'some different text');
});