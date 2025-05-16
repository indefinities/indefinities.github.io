import { VNode } from 'preact';

type ButtonProps = {
    children: VNode,
    onClick: () => void
}

type CategoryProps = {
    category: string,
    isMobile: boolean,
    items: MenuItem[],
    onCategorySelect: (category: string) => void,
    onItemSelect: (key: string, category: string) => void
}

type FileProps = {
    disabled: boolean,
    size: number,
    item: MenuItem,
    onSelect: (key: string) => void
}

type IllustProps = {
    illustrations: Map<string, string[]>,
    isMobile: boolean
}

type MenuItem = {
    disabled: boolean,
    key: string,
    icon: string,
    label: string
}

type Position = {
    x: number,
    y: number
}

type Project = {
    key: string,
    cover: string,
    title: string,
    github: string,
    figma: string,
    url: string,
    description: string,
}

type ProjectProps = {
    content: Project
}

type ProjectGalleryProps = {
    allIcons: Map<string, MenuItem[]>,
    isMobile: boolean,
    onCategorySelect: (category: string) => void,
    onProjectSelect: (key: string, type: string) => void,
}

type ProjectTypeProps = {
    category: string,
    isMobile: boolean,
    projectIcons: MenuItem[]
    onProjectSelect: (key: string, type: string) => void,
}

type Time = {
    hours: string,
    minutes: string,
}

type WindowHeaderProps = {
    hasPrevious: boolean,
    label: string,
    onPrevious: () => void,
}

type WindowProps = {
    children: VNode,
    isMobile: boolean,
    hasPrevious: boolean,
    label: string,
    onClose: () => void,
    onPrevious: () => void,
}

export type { 
    ButtonProps, CategoryProps, FileProps, IllustProps, MenuItem, 
    Position, Project, ProjectProps, ProjectGalleryProps, ProjectTypeProps, 
    Time, WindowHeaderProps, WindowProps };