// types.ts
export interface Event {
    title: string;
    description?: string;
}

export interface TimelineItem {
    gregorianYear: number;
    imperialYear?: string;
    events: Event[];
}    