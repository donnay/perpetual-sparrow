import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {classNames, htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <div className="inner outer">
              <header className={classNames('page-header', 'inner-sm', {'screen-reader-text': _.get(this.props, 'pageContext.frontmatter.hide_title')})}>
                <h1 className="page-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                <div className="page-subtitle">
                  {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                </div>
                }
              </header>
              <div className={classNames('post-feed', 'grid', {'grid-col-2': _.get(this.props, 'pageContext.frontmatter.col_number') === 'two', 'grid-col-3': _.get(this.props, 'pageContext.frontmatter.col_number') === 'three'})}>
                {_.map(display_posts, (post, post_idx) => (
                <article key={post_idx} className="post grid-item">
                  <div className="post-inside">
                    {_.get(post, 'frontmatter.thumb_image') && 
                    <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                      <img src={safePrefix(_.get(post, 'frontmatter.thumb_image'))} alt={_.get(post, 'frontmatter.title')} />
                    </Link>
                    }
                    <header className="post-header">
                      <h2 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                      <div className="post-meta">
                        <time className="published"
                          dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                      </div>
                    </header>
                    {_.get(post, 'frontmatter.excerpt') && 
                    <p className="post-content">
                      {_.get(post, 'frontmatter.excerpt')}
                    </p>
                    }
                  </div>
                </article>
                ))}
              </div>
            </div>
            </Layout>
        );
    }
}
