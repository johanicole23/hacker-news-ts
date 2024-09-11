import * as cheerio from 'cheerio';
import { Entry } from '../models/Entry';
import { HttpClientService } from './HttpClientService';

/**
 * Parser with cheerio the response data in html
 */
export class ParserService {
    static parseEntries(htmlData: string, numberOfEntries: number): Entry[] {
        const entries: Entry[] = [];
        const $ = cheerio.load(htmlData);

        $('.athing').slice(0, numberOfEntries).each((index, element) => {
            const idElement = $(element).find('.rank');
            const entryId = parseInt(idElement.text().replace('.', '').trim()) || 0;

            const titleElement = $(element).find('.titleline > a');
            const entryTitle = titleElement.text().trim();

            const subtextClass = $(element).next().find('.subtext');

            const pointsElement = subtextClass.find('.score');
            const entryPoints = parseInt(pointsElement.text().split(' ')[0]) || 0;

            const commentsText = subtextClass.find('a').last().text();
            const entryComments = commentsText.includes('comment') ?
                parseInt(commentsText.split(' ')[0]) : 0;

            entries.push(new Entry(entryId, entryTitle, entryPoints, entryComments));
        })
        return entries;
    }

}
