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
    const [day, month, year] = dateString.split(".").map((part) => parseInt(part, 10));

    return new Date(year, month - 1, day);
}

export function calculateDateDifference(startDate: Date, endDate?: Date) {
    const diffTime = Math.abs((endDate ? endDate.getTime() : new Date().getTime()) - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
