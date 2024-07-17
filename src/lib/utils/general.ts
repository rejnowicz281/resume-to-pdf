import { Style } from "@react-pdf/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import uniqid from "uniqid";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Function to combine stylesheet objects
export function js(...styles: Style[]): Style {
    return styles.reduce((acc, style) => {
        if (style) {
            return { ...acc, ...style };
        }
        return acc;
    }, {});
}

// Add an id to an object
export function withID<T>(obj: T): T & { id: string } {
    return { ...obj, id: uniqid() };
}

export function makeUnderscore(str: string) {
    return str.replace(/\s/g, "_");
}
