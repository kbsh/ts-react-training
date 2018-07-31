declare namespace D3 {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }
    export interface Event {
        x: number;
        y: number;
    }
    export interface Base extends Selectors {
        event: Event;
    }
}

// グローバル
var d3: D3.Base;

declare module "declareModule" {
    export function fn(): string;
}