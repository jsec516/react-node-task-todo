export interface DBDriver {
    create(collection: string, params: any): Promise<any>;
    find(collection: string, params: any): Promise<any>;
    connect(): Promise<any>;
    [key: string]: any;
}