import type { CSSProperties } from 'react'
import type { Project } from '../data/projects'

interface ProjectMediaProps {
  project: Project
  alt: string
  style?: CSSProperties
}

export default function ProjectMedia({ project, alt, style }: ProjectMediaProps) {
  const sharedStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    ...style,
  }

  if (project.video) {
    return (
      <video
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={sharedStyle}
        aria-label={alt}
      />
    )
  }

  return <img src={project.image} alt={alt} style={sharedStyle} />
}
