import axios from 'axios';

export class HttpClientService {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    async fetchData(): Promise<string> {
        const response = await axios.get(this.url);
        return response.data;
    }
}