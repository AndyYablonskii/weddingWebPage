export const createGoogleCalendarUrl = (): string => {
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "Наше весілля 💍");
    url.searchParams.set("details", "Запрошуємо вас розділити з нами цей особливий день!");
    url.searchParams.set("location", "пров.Шкільний 2а, с.Хутори");
    url.searchParams.set("dates", "20251004T140000Z/20251004T170000Z");
    return url.toString();
};