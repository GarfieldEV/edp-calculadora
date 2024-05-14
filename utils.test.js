const {  } = require('./util');
import { calculate } from './utils.js';

const puppeteer = require('puppeteer');
describe('calculate', () => {
  test('should add two numbers correctly', () => {
    expect(calculate(2, 3, '+')).toBe(5);
    expect(calculate(-2, 3, '+')).toBe(1);
    expect(calculate(0, 0, '+')).toBe(0);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculate(5, 3, '-')).toBe(2);
    expect(calculate(5, -3, '-')).toBe(8);
    expect(calculate(-5, 3, '-')).toBe(-8);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculate(2, 3, '*')).toBe(6);
    expect(calculate(-2, 3, '*')).toBe(-6);
    expect(calculate(0, 5, '*')).toBe(0);
  });

  test('should divide two numbers correctly', () => {
    expect(calculate(6, 3, '/')).toBe(2);
    expect(calculate(-6, 3, '/')).toBe(-2);
    expect(calculate(5, 0, '/')).toBe(Infinity);
  });

  test('should return NaN for invalid operation', () => {
    expect(calculate(2, 3, '%')).toBeNaN();
    expect(calculate(5, 0, 'foo')).toBeNaN();
    expect(calculate(NaN, 3, '+')).toBeNaN();
  });

  test('End to End Test', async() => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 20,
      args: ['--window-size=1920,1080']
    });
      const page = await browser.newPage();
      await page.goto(
        'http://127.0.0.1:5500/'
      )

      await page.click('#fiveButton');
      await page.click('#divideButton');
      await page.click('#fiveButton');
      await page.click('#equalButton');

      await page.waitForSelector('#display_val');

      const finalText = await page.$eval('#display_val', el => el.value)
      expect(finalText).toBe('1');
    }, 100000)
});