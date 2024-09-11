export class WordCounter {
    /**
     * Method to count the words in the title of the new without special charcaters and words with - like one
     */
    static countWords(title: string): number {

        if (title === '') return 0;

        if (!/[a-zA-Z]/.test(title)) return 0;

        const convertToOneWord = title.replace(/-/g, '');
        const withoutSpecialCharacters = convertToOneWord.replace(/[^a-zA-Z\s]/g, '');
        const words = withoutSpecialCharacters.trim().split(/\s+/);

        return words.length;
    }
}