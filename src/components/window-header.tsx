import { WindowHeaderProps } from "../lib/types";

export default function WindowHeader({hasPrevious, label, onPrevious}: WindowHeaderProps ) {
    const iconClasses: string = 'size-5 stroke-orange-100';

    return (
        <div className="flex flex-row gap-4 items-center">
            <span className={hasPrevious ? 'cursor-pointer' : 'cursor-not-allowed'} onClick={() => onPrevious()}>
                <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='3' stroke="currentColor">
                    <path opacity={hasPrevious ? 1 : 0.5} stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </span>
            <span className="cursor-not-allowed">
                <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width='3' stroke="currentColor">
                    <path opacity={0.5} stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </span>
            <h3 className="pixelate-text text-orange-100 uppercase font-bold">
                {label}
            </h3>
        </div>
    )
}