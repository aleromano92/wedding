import React from 'react'
import PropTypes from 'prop-types'
import { sections } from './sections'
import plane from '../images/plane.svg'
import { CountdownTimer } from './CountdownTimer'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="icon" src={plane}/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>18 Giugno 2020</h1>
        <CountdownTimer date={new Date("Jun 18, 2020 11:00:00")} />
      </div>
    </div>
    <nav>
      <ul>
        {sections.map(section => (
          <li>
            <a
              href={null}
              onClick={() => {
                props.onOpenArticle(section.id)
              }}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
