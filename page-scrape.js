const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');

(async()=> {
    const page = await axios.get('http://localhost:3000');
    const data = page.data;

    console.log(data); //give us the whole page.
    console.log('-------------------');
    
    const dom = parse(data);
    
    const heading = dom.querySelector('h1');
    console.log(heading.text);
    console.log('-------------------');

    const content = dom.querySelectorAll('p')
                        .reduce((acc, {text}) => acc + text, '');
    console.log(content);
    console.log('-------------------');

    const img = dom.querySelector('.kitten');
    console.log(img.getAttribute('src'));
    console.log('-------------------');

    //this is throw error as content is dynamically created.
    //const heading2 = dom.querySelector('h2');
    //console.log(heading2.text);
    //console.log('-------------------');


    //using puppeteer --- headless chromium browser
    const browser = await puppeteer.launch();
    const pageNew = await browser.newPage();

    await pageNew.goto('http://localhost:3000/index.html');

    const dataNew = await pageNew.evaluate(() => document.body.innerHTML);

    //save screenshot
    await pageNew.screenshot({ path:'site_screenshot.png'});

    //save pdf
    await pageNew.pdf({ path: 'site_pdf.pdf'})

    await browser.close();
    console.log(dataNew);
    console.log('-------------------');

    const dom2 = parse(dataNew);
    const headingNew2 = dom2.querySelector('h2');
    console.log(headingNew2.text);
    console.log('-------------------');


})();