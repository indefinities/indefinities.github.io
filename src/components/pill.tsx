interface PillProps {
    label: string
}


export default function Pill({ label }: PillProps) {
    return (
        <div className="rounded-full w-fit bg-red-300">
            <p className="w-fit mx-3 py-1 font-semibold">
                { label }
            </p>
        </div>
    )
}