import axios from 'axios';
import * as cheerio from 'cheerio';
import { Entry } from '../models/Entry';

//Service to do the scraping of the Hacker News website.

export class ScraperService {
    private url: string = 'https://news.ycombinator.com/';
    private numberOfEntries: number = 30;

    /**
     * Get the first 30 entries from the Hacker News website.
     * @returns an array of 'Entry'
     */
    async scrapeEntries(): Promise<Entry[]> {
        const entries: Entry[] = [];

        try {
            const response = await axios.get(this.url);
            const $ = cheerio.load(response.data);
            //Elements from Hacker News with 'athing' class
           
            $('.athing').slice(0, this.numberOfEntries).each((index, element) => {
                const idElement = $(element).find('.rank').text();
                const entryId = parseInt(idElement.replace('.', '').trim()) || 0;

                const titleElement = $(element).find('.titleline a');
                const entryTitle = titleElement.text();
                entries.push(new Entry(entryId, entryTitle, 1, 1))
            })
        }
        catch (error) {
            console.error('Scraping error', error);
        }
        return entries;
    }



}
