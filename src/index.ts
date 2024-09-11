import { each } from 'cheerio/dist/commonjs/api/traversing';
import { ScraperService } from './services/ScraperService';
import { WordCounter } from './utils/WordCounter'


const exampleText = "This is - a self-explained example";
const counter = WordCounter.countWords(exampleText);
console.log(`Word count: ${counter}`);
/**
 * Principal Method to manage the scraping and filters
 */
(async () => {
    const scraper = new ScraperService(3);
    try {
        const entries = await scraper.scrapeEntries();

        entries.forEach(entry => {
            console.log(entry.showStatement());
        });


    } catch (error) {
        console.error('Error occurred during scraping:', error);
    }
})();
