import Pill from "../components/pill";
import skills from '../lib/skills-tools.json';

export default function Skills() {
    const skillsMap: Map<string, string[]> = new Map(Object.entries(skills) as Array<[string, string[]]>)

    return (
        <div className="lg:w-[60%]">
            {
                [...skillsMap.keys()].map((s: string) => (
                    <div>
                        <h3 className="my-5 uppercase font-bold">{s}</h3>
                        <div className="w-full flex flex-row flex-wrap gap-2">
                            {
                                skillsMap.get(s)?.map((i: string) => (
                                    <Pill label={i} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}