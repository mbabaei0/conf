export interface ResObject {
    collection: Collection;
}

export interface Collection {
    version: string;
    href: string;
    links: any[];
    items: ISpaeker[];
    queries: any[];
    template: Template;
}

export interface Template {
    data: any[];
}

export interface ISpaeker {
    href: string;
    data: Datum[];
    links: Link[];
}

export interface Link {
    rel: string;
    href: string;
}

export interface Datum {
    name: string;
    value: string;
}