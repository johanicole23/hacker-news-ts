import axios from 'axios';
import * as cheerio from 'cheerio';
import { Entry } from '../models/Entry';

//Service to do the scraping of the Hacker News website.

export class ScraperService {
    private url: string = 'https://news.ycombinator.com/';
    private _numberOfEntries: number;

    constructor ( numberOfEntries : number){
        this._numberOfEntries = numberOfEntries
    }

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

            $('.athing').slice(0, this._numberOfEntries).each((index, element) => {
                const idElement = $(element).find('.rank');
                const entryId = parseInt(idElement.text().replace('.', '').trim()) || 0;

                const titleElement = $(element).find('.titleline a');
                const entryTitle = titleElement.text().trim();

                const subtextClass = $(element).next().find('.subtext'); 

                const pointsElement = subtextClass.find('.score');
                const entryPoints = parseInt(pointsElement.text().split(' ')[0]) || 0;        

                const commentsText = subtextClass.find('a').last().text();
                const entryComments = commentsText.includes('comment') ?
                    parseInt(commentsText.split(' ')[0]) : 0;

                entries.push(new Entry(entryId, entryTitle, entryPoints, entryComments));
            })
        }
        catch (error) {
            console.error('Scraping error', error);
        }
        return entries;
    }

}
