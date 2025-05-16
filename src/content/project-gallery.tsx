import CategoryCard from '../components/category-card';
import { MenuItem, ProjectGalleryProps } from "../lib/types";

export default function ProjectGallery({ allIcons, isMobile, onCategorySelect, onProjectSelect }: ProjectGalleryProps) {
    const categories: string[] = ["code", "design", "ux"];

    const getIcons = (category: string): MenuItem[] => {
        return allIcons.get(category) as MenuItem[];
    }

    const handleCategorySelect = (category: string): void => {
        onCategorySelect(category)
    }

    const handleItemSelect = (key: string, category: string): void => {
        onProjectSelect(key, category)
    }

    return (
        <div className="p-6 h-full flex flex-row flex-wrap gap-2 justify-center items-center overflow-y-scroll">
            {
                categories.map((c: string) => (
                    <CategoryCard category={c} isMobile={isMobile} items={getIcons(c)}
                        onCategorySelect={handleCategorySelect}
                        onItemSelect={handleItemSelect} />
                ))
            }

        </div>
    )
}