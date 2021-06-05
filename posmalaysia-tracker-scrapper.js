const axios = require('axios');
const { parse } = require('node-html-parser');
const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async()=> {
    //using puppeteer --- headless chromium browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://sendparcel.poslaju.com.my/open/trace?tno=ERC591633613MY');

    const datas = await page.evaluate(() => {
        const trs = Array.from(document.querySelectorAll('table tr'))
        console.log(trs);
        return trs.map(tr => tr.innerText)    
      });

    //save screenshot
    await page.screenshot({ path:'poslaju_screenshot.png', fullPage: true });

    //save pdf
    await page.pdf({ path: 'poslaju_pdf.pdf'})

    await browser.close();

    //create csv
    await fs.writeFile('poslaju-tracker.csv','');

    console.log(datas);
    //data.forEach( d => {await fs.appendFile('poslaju-tracker.csv', d.replaceAll("\t", ","))});

    for(const data of datas){
        await fs.appendFile('poslaju-tracker.csv', data.replaceAll(",","-").replaceAll("\t", ",")+"\n");
    }

})();