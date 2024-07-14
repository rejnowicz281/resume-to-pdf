import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Style } from "@react-pdf/types";

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
