import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
//import * as puppeteer from 'puppeteer';
import scrapAd from '../src/scrapAd';
import Car from './classes/car';
import exportToSpreadsheet from './spreadsheet';
import AD_URLS from './constants/urls';

const Stopwatch = require('statman-stopwatch');

async function fetchPageNumber({url}){
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const paginationList = $('.pagination-list > li[data-testid="pagination-list-item"]').toArray();
    const lastPage = $(paginationList?.[paginationList.length-1]).text()

    return parseInt(lastPage);
}

async function scrapPage(title:string,{url}, cars: Array<Car>){
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const ads = $('article').toArray();

    for(const ad of ads){
        const href = $(ad).find('div:nth-of-type(1) > h2 > a').attr('href') ?? '';
        const img = $(ad).find('img').attr('src');

        const reg = new RegExp(title.split('_')[0], 'i');
        if(reg.test(href)){
            console.log('Fetching information about car no. %d', cars.length+1)
            const car = await scrapAd({url: href}, img ?? '');
            if(car.title.length>0){
                cars.push(car);
                console.log('Successfully received information about car no. %d', cars.length)
            }else{
                console.log('ERROR: Ad is empty!');
            }
        }
    }
}

async function crawl(title:string,url:String){
    console.log(`=== ${title} scraper started! ===`);
    const stopwatch = new Stopwatch();
    stopwatch.start();

    const cars: Array<Car> = [];

    const lastPage = await fetchPageNumber({url});

    for(let i=1;i<lastPage+1;i++){
        const gotoPageURL = url.replace('page=1', `page=${i}`);
        console.log(`=== Scraping page no. ${i} ===`);
        await scrapPage(title,{url:gotoPageURL},cars);
    }

    stopwatch.stop();
    console.log(`=== Finished scraping ${title} ===`);
    console.log(`=== Execution time: ${stopwatch.read(2) / 1000} [s] ===`);
    console.log('=== Total scraped ads: %d ===', cars.length);
    exportToSpreadsheet(title,cars);
};

async function runAllScrapers(){
    for(const key of Object.keys(AD_URLS)){
        await crawl(key,AD_URLS[key]);
    }
}

export default runAllScrapers;