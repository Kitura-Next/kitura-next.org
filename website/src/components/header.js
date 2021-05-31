import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css";

import Search from "./search";

import kituraLogo from "../images/Kitura_logo_orange.svg";
import slackIcon from "../../../content/images/header_slack_icon.svg";
import githubIcon from "../../../content/images/header_github_icon.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
          <Link className={styles.homeLink} to="/">
              <img className={styles.headerImage} src={kituraLogo} alt="Kitura Logo"></img>
              <h1>KITURA-NexT</h1>
          </Link>
      </div>
      <nav className={styles.headerNav}>

          <Link className={styles.navLink} to="/learn">Learn</Link>

          {/* <a className={styles.navLink} href="/api">API</a> */}

          <Link className={styles.navLink} to="/news">Blog</Link>

      </nav>
      <Search />
      <nav className={styles.socialNav}>
        <a target="_blank" href="https://github.com/Kitura-Next/Kitura"><img className={styles.socialIcon} src={ githubIcon }></img></a>
        <a target="_blank" href="http://swift-at-ibm-slack.mybluemix.net"><img className={styles.socialIcon} src={ slackIcon }></img></a>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
