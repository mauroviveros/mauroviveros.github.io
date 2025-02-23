export interface Network {
    network: string;
    username: string;
    url: string;
    icon: string;
}

interface Button {
    url: string;
    title: string;
    icon: string;
    feature?: false;
    background?: string;
    color?: string;
}
interface Banner extends Omit<Button, "feature" | "background"> {
    feature: true;
    background: string;
}


export type Feature = Button | Banner;