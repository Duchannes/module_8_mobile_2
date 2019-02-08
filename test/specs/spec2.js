/* eslint-disable no-undef */
const chai = require(`chai`);
const expect = chai.expect;

describe(`tests of DEMOS application`, () => {
  afterEach(() => {
    browser.reloadSession();
  });

  it(`testing of multiplying numbers`, () => {
    $(`android=new UiSelector().resourceId("com.smart.math.calculator:id/kb_5")`).click();
    $(`android=new UiSelector().resourceId("com.smart.math.calculator:id/kb_multiply")`).click();
    $(`android=new UiSelector().resourceId("com.smart.math.calculator:id/kb_2")`).click();
    const result = $(`android=new UiSelector().resourceId("com.smart.math.calculator:id/text")`);
    expect(result.getText()).to.be.equal(`10`, `the text field is not empty before clicking`);
  });
});
