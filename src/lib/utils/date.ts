export function formatTimestamp(timestamp: string | Date) {
    const date = typeof timestamp === "string" ? new Date(timestamp) : timestamp;
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
}

export function dateToString(date?: Date, format: "dd.mm.yyyy" | "mm.yyyy" | "yyyy-mm-dd" = "mm.yyyy") {
    if (!date) return "";

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    switch (format) {
        case "dd.mm.yyyy":
            return `${formattedDay}.${formattedMonth}.${year}`;
        case "mm.yyyy":
            return `${formattedMonth}.${year}`;
        case "yyyy-mm-dd":
            return `${year}-${formattedMonth}-${formattedDay}`;
        default:
            return `${formattedMonth}.${year}`;
    }
}

export function stringToDate(dateString: string) {
    const parts = dateString.split(".").map((part) => parseInt(part, 10));

    let day, month, year;

    if (parts.length === 3) {
        [day, month, year] = parts;
    } else if (parts.length === 2) {
        [month, year] = parts;
        day = 1;
    } else {
        return new Date();
    }

    return new Date(year, month - 1, day);
}

export function calculateMonthsBetweenDates(startDate: Date, endDate?: Date) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();

    return months <= 0 ? 1 : months + 1;
}

export function getDurationBetweenDates(startDate: Date, endDate?: Date) {
    const months = calculateMonthsBetweenDates(startDate, endDate);

    if (months < 12) {
        return `${months} month${months > 1 ? "s" : ""}`;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (remainingMonths === 0) {
        return `${years} year${years > 1 ? "s" : ""}`;
    }

    return `${years} year${years > 1 ? "s" : ""} and ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
}
