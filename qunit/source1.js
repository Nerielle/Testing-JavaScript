var sut = {};
sut.readDiv = function () {
    return $('#testDiv').text();
};

sut.createToDoItem = function () {
    $('#div1').append('<div class="js-totdoContainer">we are testing functionallity, not a presentation</div>');
};