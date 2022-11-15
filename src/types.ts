export interface IEntrieProps {
    API: string;
    Description: string;
    Category: string;
    Auth: string;
    Cors: string;
    HTTPS: boolean;
    Link: string;
}

export type EntriesProps = Array<IEntrieProps>;
export type EntriesColumnName = 'API' | 'Description' | 'Category' | 'Auth' | 'Cors' | 'HTTPS' | 'Link';

export interface IResponseGenerator {
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}


export interface IEntriesReducer {
    count: number;
    entries: EntriesProps;
}
export interface IStore {
    entries: IEntriesReducer;
}
