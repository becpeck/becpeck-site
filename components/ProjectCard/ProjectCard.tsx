import Image, { type StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
    title: string,
    description: string,
    img: {
        src: StaticImageData,
        alt: string,
    }
}

export default function ProjectCard(props: ProjectCardProps) {
    const { title, description, img } = props;

    return (
        <div className={styles.ProjectCard}>
            <Image 
                src={img.src}
                alt={img.alt}
                sizes='100vw'
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            ></Image>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
