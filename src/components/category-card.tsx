import { CategoryProps, MenuItem } from "../lib/types";
import FileIcon from "./file-icon";

export default function CategoryCard({category, isMobile, items, onCategorySelect, onItemSelect}: CategoryProps) {
    const handleCategorySelect = (): void => {
        onCategorySelect(category);
    }

    const handleItemSelect = (key: string): void => {
        onItemSelect(key, category);
    }
    return (
        <div onClick={handleCategorySelect} className="cursor-pointer p-2 border-1 border-solid rounded-md h-fit lg:w-fit w-full shadow-xl hover:shadow-xl/20 bg-white border-slate-300">
                        <span className="m-1 uppercase flex flex-row justify-between">
                            <h3 className="font-bold">{category} Projects</h3>
                            <div className="w-fit flex flex-row">
                                <p className="mx-1">see more</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </span>
                        <div className="w-full flex flex-row gap-2 justify-around">
                            {
                                items.slice(0, (isMobile ? 2 : 3)).map((i: MenuItem) => (
                                    <FileIcon size={64} item={i} onSelect={handleItemSelect} disabled={false} />
                                ))
                            }
                        </div>
                    </div>
    )
}