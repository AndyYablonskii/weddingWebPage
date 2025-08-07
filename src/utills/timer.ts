import { WEDDING_DATE } from "../constants/index.ts";

export interface TimeLeft {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

export const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = WEDDING_DATE.getTime() - now.getTime();

    const defaultTime: TimeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    };

    if (difference <= 0) return defaultTime;

    return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
};