var Stock = function () {
    var self = this;
    self.analyze = function () {};

};
var Participant = function () {
    var self = this;
    self.buy = function () {};
    self.trade = function () {};
    this.participate = function (stock) {
        if (stock.analyze()) {
            self.buy();
        } else {
            self.trade();
        }
    }
};
