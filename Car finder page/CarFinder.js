const puppeteer = require('puppeteer');

async function scrapeCar(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
}

scrapeCar(`https://www.carfax.com/cars-for-sale`);