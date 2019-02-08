/* eslint-disable no-undef */
const chai = require(`chai`);
const expect = chai.expect;

describe(`tests of DEMOS application`, () => {
  afterEach(() => {
    browser.reloadSession();
  });

  it(`testing of toggle button`, () => {
    $(`~Views`).click();
    $(`~Buttons`).click();
    const button = $(`~Toggle`);
    expect(button.getText()).to.be.equal(`OFF`, `toggle switch in the initial position is incorrect`);
    button.click();
    expect(button.getText()).to.be.equal(`ON`, `toggle switch in end position is incorrect`);
  });

  it(`testing of "add text button"`, () => {
    $(`~Text`).click();
    $(`~LogTextBox`).click();
    const textField = $(`android=new UiSelector().resourceId("io.appium.android.apis:id/text")`);
    expect(textField.getText()).to.be.equal(``, `the text field is not empty before clicking`);
    $(`~Add`).click();
    expect(textField.getText()).to.be.not.equal(``, `the text field is empty after clicking`);
  });

  it(`testing of expandable list`, () => {
    $(`~Views`).click();
    $(`~Expandable Lists`).click();
    $(`~1. Custom Adapter`).click();
    $(`android=new UiSelector().text("People Names")`).click();
    const davidOption = $(`android=new UiSelector().text("David")`);
    expect(davidOption.isDisplayed()).to.be.equal(true, `option isn't displayed`);
  });
});
