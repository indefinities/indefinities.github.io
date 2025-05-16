import { FileProps } from '../lib/types';

export default function FileIcon({ disabled, size, item, onSelect }: FileProps) {

    const isDisabled: boolean = disabled || item.disabled;
    const handleClick = (): void => {
        if (!isDisabled)
            onSelect(item.key);
    }

    return (
        <div onClick={handleClick}
        className={`${isDisabled ? '' : 'cursor-pointer'} lg:m-5 max-w-[96px] flex flex-col items-center justify-items-center group`}>
            <img 
                className={isDisabled ? '' : `transition-all duration-300 ease-in-out group-hover:scale-120`}
                aria-hidden
                src={ item.icon }
                alt="File icon"
                width={size}
                height={size}/>
            <p className="pixelate-text uppercase font-bold text-center my-2">{ item.label }</p>
        </div>
    );
}