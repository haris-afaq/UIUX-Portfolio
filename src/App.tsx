import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import UIUXDesign from './pages/UIUXDesign'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'
import type { Project } from './data/projects'

export type Page =
  | 'home'
  | 'about'
  | 'work'
  | 'uiux'
  | 'experience'
  | 'contact'
  | 'casestudy'

export type NavigateFn = (page: Page, project?: Project) => void

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [darkMode, setDarkMode] = useState(true)

  const navigate: NavigateFn = (page, project) => {
    if (project) setSelectedProject(project)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      data-theme={darkMode ? 'dark' : 'light'}
      style={{ minHeight: '100vh', background: 'var(--color-background)' }}
    >
      <Nav
        currentPage={currentPage}
        navigate={navigate}
        darkMode={darkMode}
        toggleDark={() => setDarkMode(!darkMode)}
      />
      <main>
        {currentPage === 'home' && <Home navigate={navigate} />}
        {currentPage === 'about' && <About navigate={navigate} />}
        {currentPage === 'work' && <Work navigate={navigate} />}
        {currentPage === 'uiux' && <UIUXDesign navigate={navigate} />}
        {currentPage === 'experience' && <Experience navigate={navigate} />}
        {currentPage === 'contact' && <Contact navigate={navigate} />}
        {currentPage === 'casestudy' && selectedProject && (
          <CaseStudy project={selectedProject} navigate={navigate} />
        )}
      </main>
    </div>
  )
}
