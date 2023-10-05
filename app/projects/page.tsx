import type { CSSProperties } from "react";
// import ProjectCard from "@/components/ProjectCard/ProjectCard";
import fonts from '@/styles/fonts';

export default function Projects() {

    const styleH1: CSSProperties = {
        ...fonts.zapfCalligraphic.style,
        fontSize: '72px',
    }
    const styleH2: CSSProperties = {
        ...fonts.optimaNova.style,
        fontSize: '36px',
      }

    return (
        <>
            <h1 style={styleH1}>Projects</h1>
            <h2 style={styleH2}>~ Under Construction ~</h2>
            {/* <div>
                {
                    projectData.map(data => (
                        <ProjectCard
                            key={data.title}
                            title={data.title}
                            description={data.description}
                            img={data.img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}
