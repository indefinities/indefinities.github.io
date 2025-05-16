import { JSX } from 'preact';
import { useEffect, useState, useRef, useCallback } from "preact/hooks";
import { Position, WindowProps } from '../lib/types';
import WindowHeader from './window-header';

export default function Window({ isMobile, children, hasPrevious, label, onClose, onPrevious }: WindowProps) {
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const [position, setPosition] = useState<Position>({ x: window.innerWidth / 6, y: window.innerHeight / 7 });
    const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const popupRef = useRef<HTMLDivElement | null>(null);

    const onMouseMove = useCallback((event: MouseEvent): void => {
        event.preventDefault();
        if (!isDrag) return;
        let [x, y] = [event.clientX - startPos.current.x, event.clientY - startPos.current.y]
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > 2 * window.innerWidth / 3) x = 2 * window.innerWidth / 3;
        // TODO: check if window goes beyond viewport width and height
        setPosition({ x, y });
    },
        [isDrag]);

    const onMouseUp = (): void => {
        setIsDrag(false);
    };

    const onMouseDown = (event: JSX.TargetedMouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();
        setIsDrag(true);
        startPos.current = {
            x: event.clientX - position.x,
            y: event.clientY - position.y,
        };
    };


    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [onMouseMove]);

    return (
        isMobile ?
            (
                // mobile version
                <div className="overflow-y-scroll w-full max-h-[90%] z-10 fixed border-2 border-solid bg-sky-100 rounded-md"
                    style={{ bottom: 0, left: 0 }}>
                    <div className="fixed p-2 w-full flex flex-row justify-between bg-red-400">
                        <WindowHeader hasPrevious={hasPrevious} label={label} onPrevious={() => onPrevious()} />
                        {/* close button */}
                        <div className="cursor-pointer" onClick={() => onClose()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-5 p-6 h-full">
                        {children}
                    </div>
                </div>)
            : (
                // desktop version
                <div ref={popupRef} className="w-[70vw] max-h-xl min-h-sm z-10 fixed border-4 border-solid border-t-white border-l-white bg-sky-100 rounded-md drop-shadow-xl"
                    style={{ left: position.x, top: position.y }}
                    onClick={(e: JSX.TargetedMouseEvent<HTMLDivElement>) => e.stopPropagation()}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}>
                    <div className="cursor-move p-2 w-full flex flex-row justify-between bg-red-400">
                        <WindowHeader hasPrevious={hasPrevious} label={label} onPrevious={() => onPrevious()} />

                        <div className="cursor-pointer" onClick={() => onClose()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[60vh] flex justify-center items-center">
                        {children}
                    </div>
                </div>));
}