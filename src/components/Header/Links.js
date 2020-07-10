import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="#" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <Link to="about" activeClassName="active" aria-label="View blog page">
        About
      </Link>
      <Link to="projects" activeClassName="active" aria-label="View projects page">
        Projects
      </Link>
      <Link to="mind-tools" activeClassName="active" aria-label="View blog page">
        Mind Tools
      </Link>
      <Link to="valuable-talks" activeClassName="active" aria-label="View valuable talks page">
        Valuable Talks
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
