const puppeteer = require('puppeteer');

const html = `
<html>
    <body>
      <table>
      <tr><td>One</td><td>Two</td></tr>
      <tr><td>Three</td><td>Four</td></tr>
      </table>
    </body>
</html>`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`data:text/html,${html}`);

  const data = await page.evaluate(() => {
    //const tds = Array.from(document.querySelectorAll('table tr td'))
    //return tds.map(td => td.innerText)
    const trs = Array.from(document.querySelectorAll('table tr'))
    console.log(trs);
    return trs.map(tr => tr.innerText)    
  });

  //You will now have an array of strings
  //[ 'One', 'Two', 'Three', 'Four' ]
  console.log(data);
  //One
  console.log(data[0].replace("\t", ","));
  await browser.close();
})();