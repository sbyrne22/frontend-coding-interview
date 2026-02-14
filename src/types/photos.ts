export type Photo = {
    id: number;
    alt: string;
    src: {
        medium: string;
    };
    photographer: string,
    photographer_url: string,
    avg_color: string,
};