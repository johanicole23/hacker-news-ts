import { WordCounter } from "../src/utils/WordCounter";

describe('WordCounter', () => {
    test('simple count words with none of the specifications', () => {
        const exampleText1 = "This is - a self-explained example";
        expect(WordCounter.countWords(exampleText1)).toBe(5);

        const exampleText2 = "This is an  example  with too  many  spaces";
        expect(WordCounter.countWords(exampleText2)).toBe(8);

        const exampleText3 = "This is an example with a question mark ?";
        expect(WordCounter.countWords(exampleText3)).toBe(8);

        const exampleText4 = "This is a simple example";
        expect(WordCounter.countWords(exampleText4)).toBe(5);
    })

    test('count words would be empty if its no letter ', () => {
        const example = "";
        expect(WordCounter.countWords(example)).toBe(0);
    })

    test('count nothing if there is only special characters', () => {
        const example = "%^&*(??@";
        expect(WordCounter.countWords(example)).toBe(0);
    })
})

