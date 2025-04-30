export function formatShowDate(date: string) {
    const newDate = new Date(date);

    return newDate.toLocaleDateString();
}