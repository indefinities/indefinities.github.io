import { useState } from "preact/hooks";
import { IllustProps } from "../lib/types"


export default function IllustGallery({ illustrations, isMobile }: IllustProps) {
    const [expanded, setExpanded] = useState<number[]>([]);
    const years: number[] = [...illustrations.keys()].map((y: string) => parseInt(y)).sort((a: number, b: number) => b - a);
    const handleOnExpand = (year: number): void => {
        if (expanded.includes(year))
            setExpanded(expanded.filter((y: number) => y !== year));
        else 
            setExpanded([...expanded, year]);
    }

    return (
        <div className="p-6 w-full h-full lg:overflow-x-scroll">
            <h3 className="uppercase font-bold">Illustrations</h3>
            <p className="italic">
                select an image to open it in a new tab!
            </p>
            <div className="h-full flex flex-row flex-wrap gap-6">
                {
                    years.map((year: number) => (
                        <div key={year} className="w-full lg:w-fit">
                            <div onClick={() => handleOnExpand(year)} className="border-b-2 cursor-pointer pixelate-text text-xl flex flex-row justify-between items-center">
                                <h3>{year}</h3>
                                {
                                    isMobile && <p className="p-4">+</p>
                                }
                                
                            </div>
                            {
                                (expanded.includes(year) || !isMobile) &&
                                <div className="w-full h-full flex flex-col flex-wrap gap-2">
                                    {
                                        illustrations.get(year.toString())?.map((path: string) => (
                                            <div onClick={() => window.open(path, '_blank')} className="cursor-pointer">
                                                <img
                                                    className="w-full lg:h-[96px] object-cover"
                                                    src={path}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    )
}