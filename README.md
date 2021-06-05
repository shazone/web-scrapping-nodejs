# web-scrapping-nodejs
Sample nodejs program to do web scrapping. This is using headless chromium using puppeteer library.
Output will be in screenshot, pdf and csv.

## page-scrape.js
to run :-
```
npm start
```
this will open the index.html

open new terminal and run
```
node page-scrape.js
```

-output will be shown in console.
-output also will be save as site_screenshot.png
-output also will be save as site_pdf.pdf

## html_scrappersample.js
This is to show how to read the data in html table.
to run :-
```
node html_scrappersample.js
```

output will be shown in console.

## posmalaysia-tracker-scrapper.js
This is to show how to read data from table which is hosted by pos malaysia.
-The url use is for parcel tracking (online live system)

https://sendparcel.poslaju.com.my/open/trace?tno=XXXXXXXXXXXX

to run :-
```
node posmalaysia-tracker-scrapper.js
```

output will be shown in console / save as poslaju_screenshot.png / save as poslaju_pdf.pdf / poslaju-tracker.csv



