import { useEffect, useState } from "preact/hooks";
import { Time } from "../lib/types";
import ThemeMode from "./theme-mode";

interface HeaderProps {
    onThemeChange: (theme: string) => void
}

export default function Header({ onThemeChange }: HeaderProps) {
    /**
     * Checks if there is a system preference for light/ dark, then set to that mode
     * Otherwise, set mode based on time of day
     * 
     * Default: light mode
     */

    /**
     * Gets the current time in H:MM format
     * @returns Time object
     */
    const getTime = (): Time => {
        const now = new Date()
        return {
            hours: now.getHours().toString(),
            minutes: now.getMinutes().toString().padStart(2, '0'),
        }
    }

    const [time, setTime] = useState<Time>(getTime());
    const [isSec, setIsSec] = useState<boolean>(true);

    /**
     * Updates the time displayed after every minute.
     */
    useEffect(() => {
        const timeInt = setInterval(() => {
            setTime(getTime());
        }, 60000);

        const secInt = setInterval(() => {
            setIsSec(prev => !prev);
        }, 1000);

        return () => {
            clearInterval(timeInt);
            clearInterval(secInt);
        }
    }, []);

    const handleThemeChange = (theme: string): void => {
        onThemeChange(theme);
    }

    return (
        <div className="pixelate-text col-span-full w-full flex flex-row justify-between p-4">
            <h3 className="font-bold">indefinite, infinities</h3>
            <span className="flex flex-row">
                <p className="mx-2">{`${time.hours}${isSec ? ':' : ' '}${time.minutes}`}</p>
                <ThemeMode onThemeChange={handleThemeChange} />
            </span>
        </div>
    );
}