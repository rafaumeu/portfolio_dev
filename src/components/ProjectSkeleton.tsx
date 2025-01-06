import React from 'react'
import '../styles/skeleton.css'

const ProjectSkeleton: React.FC = () => {
  return (
    <div className=" grid-item skeleton">
      <div className="skeleton-image" />
      <div className="skeleton-title" />
      <div className="skeleton-description" />
    </div>
  )
}

export default ProjectSkeleton
