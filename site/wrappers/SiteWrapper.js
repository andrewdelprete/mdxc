import './SiteWrapper.less'
import React, { Component, PropTypes } from 'react'
import { Link } from 'sitepack-react'
import createClassNamePrefixer from '../utils/createClassNamePrefixer'


const cx = createClassNamePrefixer('SiteWrapper')

const logoLinkTheme = ({ renderLink, active, children }) =>
  renderLink({ className: cx('logo', { 'logo-active': active }) }, children)

const exampleLinkTheme = ({ renderLink, active, children }) =>
  renderLink({ className: cx('link', { 'link-active': active }) }, children)


export default class SiteWrapper extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
  }

  render() {
    const { children, page, hash } = this.props

    return (
      <div className={cx.root()}>
        <nav>
          <a className={cx('github-ribbon')} href="https://github.com/simonwhitaker/github-fork-ribbon-css" title="Fork me on GitHub">Fork me on GitHub</a>
          <Link page='/site/index.page.js' theme={logoLinkTheme} exact>
            <img src={require('../../media/logo-white.png')} />
          </Link>
          <p className={cx('description')}>React Components within Markdown</p>
          <span className={cx('heading')}>Examples</span>
          <Link page='/examples/tags.mdx'  theme={exampleLinkTheme}>Basics</Link>
          <Link page='/examples/props.mdx' theme={exampleLinkTheme}>Imports</Link>
          <Link page='/examples/props.mdx' theme={exampleLinkTheme}>Component props</Link>
          <Link page='/examples/tags.mdx'  theme={exampleLinkTheme}>react-router links</Link>
          <Link page='/examples/tags.mdx'  theme={exampleLinkTheme}>Heading links</Link>
          <Link page='/examples/tags.mdx'  theme={exampleLinkTheme}>Live code blocks</Link>

          <div className={cx('github-stars')}>
            <a className="github-button" href="https://github.com/jamesknelson/mdxc" data-icon="octicon-star" data-show-count="true" aria-label="Star jamesknelson/mdxc on GitHub">Star</a>
          </div>
        </nav>
        <main className={cx('main')}>
          {
            /* `children` will be `undefined` on 404 */
            children || '404'
          }
        </main>
        <footer>
          <a className={cx('author')} href='http://jamesknelson.com'>By James K Nelson</a>
        </footer>
      </div>
    )
  }
}