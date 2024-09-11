import { each } from 'cheerio/dist/commonjs/api/traversing';
import { ScraperService } from './services/ScraperService';

/**
 * Principal Method to manage the scraping and filters
 */
(async () => {
    const scraper = new ScraperService();
    try {
        const entries = await scraper.scrapeEntries();
       
        entries.forEach(entry => {
            let statement = `
            ==========================================================
            ${entry.entryTitle}
            ==========================================================
            ENTRY ID     : ${entry.entryId}
            POINTS       : ${entry.entryPoints}
            COMMENTS     : ${entry.entryComments}
            ----------------------------------------------------------
            `;
            console.log(statement);
        });
        // console.log('Scraped entries:', entries);
     

    } catch (error) {
        console.error('Error occurred during scraping:', error);
    }
})();