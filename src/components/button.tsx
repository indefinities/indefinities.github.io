import { ButtonProps } from "../lib/types"

export default function Button({ children, onClick }: ButtonProps) {

    const handleOnClick = (): void => {
        onClick()
    }

    return (
        <button onClick={handleOnClick} className="rounded-lg bg-sky-800 text-orange-100">
            { children }
        </button>
    )
}