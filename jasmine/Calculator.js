var Calculator = function (elementId) {
    var calc = this;
    calc.elementId = elementId;
    this.add = function (a, b) {
        $(calc.elementId).text(a + b);
    };
    this.divide = function (a, b) {
        $(calc.elementId).text(a / b);
    };
}
