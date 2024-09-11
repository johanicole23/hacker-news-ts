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
                const entryId = parseInt($(element).attr('id')||'0');
                entries.push(new Entry(entryId,'ABC',1,1))
            })
        }
        catch (error) {
            console.error('Scraping error', error);
        }
        return entries;
    }



}
