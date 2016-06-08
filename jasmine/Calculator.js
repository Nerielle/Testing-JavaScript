var Calculator = function (elementId) {
    var calc = this;
    calc.elementId = elementId;
    this.add = function (a, b) {
        $(calc.elementId).text(a + b);
    };
    this.divide = function (a, b) {
        $(calc.elementId).text(a / b);
    };
    this.hideResult = function () {
        $(calc.elementId).fadeOut(1000);
    };
    this.pauseBeforeHiding = function () {
        setTimeout(function () {
            $(calc.elementId).css('display', 'none');
        }, 1500);
    };
}
