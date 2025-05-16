import { VNode } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// Components
import FileIcon from "./components/file-icon";
import Footer from "./components/footer";
import Header from "./components/header";
import Window from "./components/window";

// Content Imports
import About from './content/about';
import ProjectTemp from './content/project-template';
import ProjectGallery from './content/project-gallery';
import ProjectType from './content/project-type';
import Skills from './content/skills';
import IllustGallery from './content/illust-gallery';

// Data Types
import { MenuItem, Project } from './lib/types';
import desktop from './lib/desktop.json';
import projects from './lib/projects.json';
import illustrations from './lib/illustrations.json';


export function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);
  const [currFile, setCurrFile] = useState<string>("");
  const [windowContent, setWindowContent] = useState<VNode>(<div />);

  // All entries of projects ('code', 'ux', 'spotlight', etc.) except for index 0, which is the 'icons' key
  const allProjects: Array<[string, Project[]]> = Object.entries(projects).slice(1) as Array<[string, Project[]]>;
  // A HashMap of all projects to dynamically obtain keys
  const projectsMap: Map<string, Project[]> = new Map(allProjects)
  // A HashMap of all icons to display on Project Gallery page, to dynamically obtain key
  const allIcons: Map<string, MenuItem[]> = new Map(Object.entries(projects.icons) as Array<[string, MenuItem[]]>)

  const allIllust: [string, string[]][] = Object.entries(illustrations);
  const illustMap: Map<string, string[]> = new Map(allIllust);


  /**
   * Handle what happens when an icon on the main menu is selected
   * @param key the ID of the icon being selected
   */
  const handleFileSelect = (key: string): void => {
    // if the window isn't open yet, then set the current file to the key
    if (!isWindowOpen)
      setCurrFile(key);
    if (key === 'resume')
      window.open('/Hsu_Natalie_Resume.pdf', '_blank');
    else
      setIsWindowOpen(true);
  }

  /**
   * Handle what happens when the use clisk on the close button
   */
  const onWindowClose = (): void => {
    setIsWindowOpen(false);
    setCurrFile("");
  }

  /**
   * Changes the theme on the website based on clicking the sun or moon icon
   * on the top right corner of the page
   * Default: light theme
   * @param theme 'light' or 'dark'
   */
  const handleThemeChange = (theme: string): void => {
    // TODO: implement changing the whole theme
    console.log(theme);
  }

  /**
   * Find the object with the project details to display on the Project template
   * @param key the ID of the project
   * @param type the category to select within the project.json file
   * @returns 
   */
  const findProject = (key: string, type: string): Project => {
    return projectsMap.get(type)?.find(p => p.key === key) as Project;
  }

  /**
   * Finds the projext to display based on the key and also sets the Window component
   * content to display the info for that project
   * @param key the ID of the project
   * @param type the category ID that the project is listed under
   */
  const displayProject = (key: string, type: string): void => {
    const projectContent: Project = findProject(key, type);
    setWindowContent(<ProjectTemp content={projectContent} />);
  }

  /**
   * 
   * @param category 
   * @returns all icons to display under the category
   */
  const getIcons = (category: string): MenuItem[] => {
    return allIcons.get(category) as MenuItem[];
  }
  /**
   * Sets the window content to the project gallery
   */
  const setProjectGallery = (): void => {
    setWindowContent(<ProjectGallery allIcons={allIcons} isMobile={isMobile} onCategorySelect={handleCategorySelect} onProjectSelect={handleProjectSelect} />);
  }

  /**
   * Set the window content to display all projects within a category (ProjectType component)
   * @param category 
   */
  const handleCategorySelect = (category: string): void => {
    setHasPrevious(true);
    setCurrFile(`projects/${category}`)
    setWindowContent(<ProjectType category={category} isMobile={isMobile} projectIcons={getIcons(category)} onProjectSelect={handleProjectSelect}  />)
  }

  const handleProjectSelect = (key: string, category: string): void => {
    displayProject(key, category);
  }

  const setAboutPage = (): void => {
    setWindowContent(<About onNextPage={handleNextAboutPage} />);
  }

  const handleOnPrevious = (): void => {
    setHasPrevious(false);
    if (currFile.includes('projects'))
      setProjectGallery();
    else if (currFile === 'about')
      setAboutPage();
  }

  const handleNextAboutPage = (): void => {
    setHasPrevious(true);
    setWindowContent(<Skills />);
  }

  /**
   * useEffect which runs once on component mount
   */
  useEffect(() => {
    const checkMobile = () => {
      const match = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(match || navigator.maxTouchPoints > 1);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  /**
   * Set Window contents when file value is changed
   */
  useEffect(() => {
    switch (currFile) {
      case 'about':
        setAboutPage();
        break;
      case 'portfolio':
        displayProject(currFile, 'code')
        break;
      case 'mbta-viz':
        displayProject(currFile, 'code')
        break;
      case 'projects':
        setProjectGallery();
        break;
      case 'illustrations':
        setWindowContent(<IllustGallery illustrations={illustMap} isMobile={isMobile} />);
        break;
      default:
        break;
    }
  }, [isWindowOpen])

  return (
    <>
      <main className={`z-0 w-full h-screen grid grid-cols-6 place-content-between ${isWindowOpen ? 'overflow-hidden' : ''}`}>
        <Header onThemeChange={handleThemeChange} />
        <div className="w-full col-span-full lg:col-start-2 lg:col-end-6 flex flex-row flex-wrap gap-4 lg:gap-6 justify-center items-start">
          {desktop.items.map((i: MenuItem) => (
            <FileIcon disabled={isWindowOpen} size={isMobile ? 84 : 96} key={i.key} item={i} onSelect={handleFileSelect} />
          ))}
        </div>
        <Footer />
      </main>
      {
        isWindowOpen &&
        <Window hasPrevious={hasPrevious} isMobile={isMobile} label={currFile} onClose={onWindowClose} onPrevious={handleOnPrevious}>
          {windowContent}
        </Window>
      }
    </>
  )
}
