import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import Car from './classes/car';

async function scrapAd({url}){
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const car = new Car();

    const title = $('.offer-header__row > h1').text().replace('Niski przebieg','').trim();
    const price = $('.price-wrapper .offer-price__number').text().replace('PLN','').trim();

    car.title=title;
    car.price=price;
    car.url=url;

    const items = $('.offer-params__list > .offer-params__item').toArray();
    for(const item of items){
        const header = $(item).find('span').text();
        const value = $(item).find(' .offer-params__value').text().trim();
        
        switch(header){
            case 'Marka pojazdu':
                car.brand = value;
                break;

            case 'Model pojazdu':
                car.model = value;
                break;
            
            case 'Wersja':
                car.version = value;
                break;
            
            case 'Rok produkcji':
                car.year = value;
                break;

            case 'Moc':
                car.horsePower = value;
                break;

            case 'Pojemność skokowa':
                car.engine = value;
                break;

            case 'Skrzynia biegów':
                car.gearbox = value;
                break;
        }
    }
    return car;
}

export default scrapAd;