import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: false });

const page = await browser.newPage();

await page.goto('https://hn.algolia.com');

await page.waitForSelector('.SearchInput');

await page.type('.SearchInput', 'show hn', { delay: 100 });

await page.screenshot({ path: 'data/search.png' });

 const links = await page.evaluate(()=>{
     return [...document.querySelectorAll(".story_title a:first-child")].map(
         (e)=>e.href
 );
 });

console.log(links);

await browser.close();


