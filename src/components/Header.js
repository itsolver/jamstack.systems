/** @jsx jsx */
import { jsx } from 'theme-ui'
import TOC from './TOC'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

export default ({ opened, close }) => (
  <div>
    <TOC opened={ opened } />
    <header sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    }}>
      <nav sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        px: 2,
        py: 2,
      }}>
        <Logo
          opened={ opened }
          close={ close }
        />
        <ThemeToggle />
      </nav>
    </header>
  </div>
)