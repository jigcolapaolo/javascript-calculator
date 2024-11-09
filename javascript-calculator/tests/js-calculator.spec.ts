import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test(`My calculator should contain a clickable element containing an "=" (equal sign)
   with a corresponding id="equals"`, async ({ page }) => {
    const equalButton = page.locator('#equals');

    await expect(equalButton).toBeVisible();

    const tagName = await equalButton.evaluate(el => el.tagName.toLowerCase());
    expect(tagName).toBe('button');
});

test(`My calculator should contain 10 clickable elements containing one number each from 0-9,
  with the following corresponding IDs:
  id="zero", id="one", id="two", id="three", id="four", id="five", id="six",
  id="seven", id="eight", and id="nine"`, async ({ page }) => {

  const expectedIds = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (const id of expectedIds) {
    const button = page.locator(`#${id}`);
    await expect(button).toBeVisible();
    const tagName = await button.evaluate(el => el.tagName.toLowerCase());
    expect(tagName).toBe('button');
  }
})

test(`My calculator should contain 4 clickable elements each containing
  one of the 4 primary mathematical operators with the following corresponding IDs:
  id="add", id="subtract", id="multiply", id="divide"`, async ({ page }) => {

    const expectedOperatorIds = ['add', 'subtract', 'multiply', 'divide'];

    for (const id of expectedOperatorIds) {
      const button = page.locator(`#${id}`);
      await expect(button).toBeVisible();
      const tagName = await button.evaluate(el => el.tagName.toLowerCase());
      expect(tagName).toBe('button');
    }
})

test(`My calculator should contain a clickable element containing a "." (decimal point)
  symbol with a corresponding id="decimal"`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const decimalButton = calculator.locator('#decimal');

    await expect(decimalButton).toBeVisible();

    const tagName = await decimalButton.evaluate(el => el.tagName.toLowerCase());
    expect(tagName).toBe('button');
});

test(`My calculator should contain a clickable element with an id="clear"`, async ({ page }) => {
  const calculator = page.locator('#calculator');
  const clearButton = calculator.locator('#clear');

  await expect(clearButton).toBeVisible();

  const tagName = await clearButton.evaluate(el => el.tagName.toLowerCase());
  expect(tagName).toBe('button');
});

test(`My calculator should contain an element to display values
  with a corresponding id="display"`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');

    await expect(display).toBeVisible();
});

test(`At any time, pressing the clear button clears the input and output values,
  and returns the calculator to its initialized state;
  0 should be shown in the element with the id of "display"`, async ({ page }) => {

    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    const clearButton = calculator.locator('#clear');

    await clearButton.click();

    await expect(display).toHaveText('0');
});

test(`As I input numbers,
  I should be able to see my input in the element with the id of "display"`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const threeButton = calculator.locator('#three');
    const sevenButton = calculator.locator('#seven');
    const oneButton = calculator.locator('#one');

    await threeButton.click();
    await sevenButton.click();
    await oneButton.click();

    await expect(display).toHaveText('371');
})

test(`In any order, I should be able to add, subtract,
  multiply and divide a chain of numbers of any length,and when I hit "=",
  the correct result should be shown in the element with the id of "display"`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const sixButton = calculator.locator('#six');
    const threeButton = calculator.locator('#three');
    const sevenButton = calculator.locator('#seven');
    const oneButton = calculator.locator('#one');

    const addButton = calculator.locator('#add');
    const subtractButton = calculator.locator('#subtract');
    const multiplyButton = calculator.locator('#multiply');
    const divideButton = calculator.locator('#divide');
    const equalButton = calculator.locator('#equals');

    await test.step('Calculate the result of 371 + 71 and verify it', async () => {
      await threeButton.click();
      await sevenButton.click();
      await oneButton.click();
      await addButton.click();
      await sevenButton.click();
      await oneButton.click();
      await equalButton.click();
  
      await expect(display).toHaveText('442');
    });
  
    await test.step('Calculate the result of 71 - 1 and verify it', async () => {
      await sevenButton.click();
      await oneButton.click();
      await subtractButton.click();
      await oneButton.click();
      await equalButton.click();
  
      await expect(display).toHaveText('70');
    });
  
    await test.step('Calculate the result of 371 * 6 and verify it', async () => {
      await threeButton.click();
      await sevenButton.click();
      await multiplyButton.click();
      await sixButton.click();
      await equalButton.click();
  
      await expect(display).toHaveText('222');
    });
  
    await test.step('Calculate the result of 6 / 3 and verify it', async () => {
      await sixButton.click();
      await divideButton.click();
      await threeButton.click();
      await equalButton.click();
  
      await expect(display).toHaveText('2');
    });
});

test(`When inputting numbers,
  my calculator should not allow a number to begin with multiple zeros.`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const zeroButton = calculator.locator('#zero');

    await zeroButton.click();
    await zeroButton.click();
    await zeroButton.click();

    await expect(display).toHaveText('0');
})

test(`When the decimal element is clicked, a "." should append to the currently displayed value;
  two "." in one number should not be accepted`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const decimalButton = calculator.locator('#decimal');
    const oneButton = calculator.locator('#one');

    await oneButton.click();
    await decimalButton.click();
    await decimalButton.click();

    await expect(display).toHaveText('1.');
});

test(`I should be able to perform any operation (+, -, *, /) 
  on numbers containing decimal points`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const sixButton = calculator.locator('#six');
    const twoButton = calculator.locator('#two');
    const threeButton = calculator.locator('#three');
    const sevenButton = calculator.locator('#seven');
    const oneButton = calculator.locator('#one');
    const decimalButton = calculator.locator('#decimal');

    const addButton = calculator.locator('#add');
    const subtractButton = calculator.locator('#subtract');
    const multiplyButton = calculator.locator('#multiply');
    const divideButton = calculator.locator('#divide');
    const equalButton = calculator.locator('#equals');

    await test.step('Calculate the result of 3.1 + 7.1 and verify it', async () => {
      await threeButton.click();
      await decimalButton.click();
      await oneButton.click();

      await addButton.click();

      await sevenButton.click();
      await decimalButton.click();
      await oneButton.click();

      await equalButton.click();
  
      await expect(display).toHaveText('10.2');
    });
  
    await test.step('Calculate the result of 7.1 - 3.1 and verify it', async () => {
      await sevenButton.click();
      await decimalButton.click();
      await oneButton.click();

      await subtractButton.click();

      await threeButton.click();
      await decimalButton.click();
      await oneButton.click();
      await equalButton.click();
  
      await expect(display).toHaveText(Number(7.1 - 3.1).toString());
    });
  
    await test.step('Calculate the result of 3.7 * 1.6 and verify it', async () => {
      await threeButton.click();
      await decimalButton.click();
      await sevenButton.click();

      await multiplyButton.click();

      await oneButton.click();
      await decimalButton.click();
      await sixButton.click();
      await equalButton.click();
  
      await expect(display).toHaveText(Number(3.7 * 1.6).toString());
    });
  
    await test.step('Calculate the result of 7.6 / 2 and verify it', async () => {
      await sevenButton.click();
      await decimalButton.click();
      await sixButton.click();

      await divideButton.click();

      await twoButton.click();
      await equalButton.click();
  
      await expect(display).toHaveText('3.8');
    });
})

test(`If 2 or more operators are entered consecutively,
  the operation performed should be the last operator entered 
  (excluding the negative (-) sign.`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const eightButton = calculator.locator('#eight');
    const threeButton = calculator.locator('#three');

    const addButton = calculator.locator('#add');
    const subtractButton = calculator.locator('#subtract');
    const multiplyButton = calculator.locator('#multiply');
    const divideButton = calculator.locator('#divide');
    const equalButton = calculator.locator('#equals');

    await eightButton.click();
    await subtractButton.click();
    await addButton.click();
    await divideButton.click();
    await multiplyButton.click();
    await threeButton.click();
    await equalButton.click();

    await expect(display).toHaveText('24');
})

test(`Pressing an operator immediately following "=" should start a new calculation
  that operates on the result of the previous evaluation`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const eightButton = calculator.locator('#eight');
    const threeButton = calculator.locator('#three');

    const addButton = calculator.locator('#add');
    const divideButton = calculator.locator('#divide');
    const equalButton = calculator.locator('#equals');

    await eightButton.click();
    await addButton.click();
    await threeButton.click();
    await equalButton.click();
    await divideButton.click();
    await threeButton.click();
    await equalButton.click();

    await expect(display).toHaveText(Number((8 + 3) / 3).toString());
})

test(`My calculator should have several decimal places of precision when
  it comes to rounding (note that there is no exact standard,
  but you should be able to handle calculations like "2 / 7" with reasonable precision
  to at least 4 decimal places)`, async ({ page }) => {
    const calculator = page.locator('#calculator');
    const display = calculator.locator('#display');
    
    const twoButton = calculator.locator('#two');
    const sevenButton = calculator.locator('#seven');

    const divideButton = calculator.locator('#divide');
    const equalButton = calculator.locator('#equals');

    await twoButton.click();
    await divideButton.click();
    await sevenButton.click();
    await equalButton.click();

    // At least 4 decimal places
    await expect(display).toHaveText(/0\.\d{4,}/);
});
