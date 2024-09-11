export class Entry {
    constructor(
        public entryId: number,
        public entryTitle: string,
        public entryPoints: number,
        public entryComments: number
    ) { }

    public showStatement(): string {
        return `
        ==========================================================================================
         ${this.entryId}. ${this.entryTitle}
        ==========================================================================================
        POINTS       : ${this.entryPoints}
        COMMENTS     : ${this.entryComments}
        ------------------------------------------------------------------------------------------
        `;
    }
}