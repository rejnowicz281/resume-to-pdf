import i18next from "i18next";

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
        switch (i18next.language) {
            case "en":
                return `${months} month${months > 1 ? "s" : ""}`;
            case "pl":
                const lastDigit = months % 10;
                const lastTwoDigits = months % 100;

                if (lastTwoDigits > 10 && lastTwoDigits < 20) {
                    return `${months} miesięcy`;
                }

                if (lastDigit === 1) {
                    return `${months} miesiąc`;
                }

                if (lastDigit > 1 && lastDigit < 5) {
                    return `${months} miesiące`;
                }

                return `${months} miesięcy`;
            default:
                return `${months} month${months > 1 ? "s" : ""}`;
        }
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (remainingMonths === 0) {
        switch (i18next.language) {
            case "en":
                return `${years} year${years > 1 ? "s" : ""}`;
            case "pl":
                if (years === 1) {
                    return `${years} rok`;
                }

                const lastDigit = years % 10;
                const lastTwoDigits = years % 100;

                if (lastTwoDigits > 10 && lastTwoDigits < 20) {
                    return `${years} lat`;
                }

                if (lastDigit === 1) {
                    return `${years} rok`;
                }

                if (lastDigit > 1 && lastDigit < 5) {
                    return `${years} lata`;
                }

                return `${years} lat`;
            default:
                return `${years} year${years > 1 ? "s" : ""}`;
        }
    }

    switch (i18next.language) {
        case "en":
            return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
        case "pl":
            const yearsText = years === 1 ? `${years} rok` : `${years} lata`;
            const monthsText =
                remainingMonths === 1
                    ? `${remainingMonths} miesiąc`
                    : remainingMonths > 1 && remainingMonths < 5
                    ? `${remainingMonths} miesiące`
                    : `${remainingMonths} miesięcy`;

            return `${yearsText} ${monthsText}`;
        default:
            return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
    }
}
