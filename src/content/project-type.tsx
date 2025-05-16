import { ProjectTypeProps } from '../lib/types';
import FileIcon from "../components/file-icon";

export default function ProjectType({ category, isMobile, projectIcons, onProjectSelect}: ProjectTypeProps) {
    const handleProjectSelect = (key: string): void => {
        onProjectSelect(key, category)
    }

    return (
        <div className="lg:mt-8 p-6 lg:max-w-[70%]">
            <h3 className="my-4 uppercase font-bold">
                {category} Projects
            </h3>
            {
                (category === 'design' || category === 'ux') &&
                <p className="italic uppercase">this section is still under construction!</p>
            }
            <div className="my-2 flex flex-row flex-wrap gap-4 lg:gap-8">
                {
                    projectIcons.map(p =>
                    (
                        <FileIcon disabled={false} size={isMobile ? 72 : 96} item={p} onSelect={handleProjectSelect} />
                    )
                    )
                }
            </div>
        </div>
    );
}