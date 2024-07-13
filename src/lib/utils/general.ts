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

export function dateToString(date?: Date, format: "dd.mm.yyyy" | "mm.yyyy" = "mm.yyyy") {
    if (!date) return "";

    switch (format) {
        case "dd.mm.yyyy":
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        case "mm.yyyy":
            return `${date.getMonth() + 1}.${date.getFullYear()}`;
        default:
            return "";
    }
}

export function calculateDateDifference(startDate: Date, endDate?: Date) {
    const diffTime = Math.abs((endDate ? endDate.getTime() : new Date().getTime()) - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
