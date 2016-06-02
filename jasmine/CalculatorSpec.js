function setUpHtmlFixture() {
    jasmine.getFixtures().set('<div id="calc">Result</div>');
};
describe('Calculator', function () {
    var calc;
    var outputId = '#calc';

    beforeEach(function () {
        setUpHtmlFixture();
        calc = new Calculator(outputId);
    });
    it('should set result of addition', function () {
        calc.add(2, 5);
        expect($(outputId).text()).toBe('7');
    })
});
