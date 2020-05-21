import React from 'react';
import _ from 'lodash';

import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class SectionPortfolio extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        let display_projects = _.orderBy(getPages(this.props.pageContext.pages, '/projects'), 'frontmatter.date', 'desc');
        let recent_projects = display_projects.slice(0, _.get(section, 'projects_number'));
        let post_len = _.size(recent_projects);
        return (
            <section id={_.get(section, 'section_id')} className="block-portfolio block outer">
              <div className="inner">
                {(_.get(section, 'title') || _.get(section, 'subtitle')) && 
                <div className="block-header inner-sm">
                  {_.get(section, 'title') && 
                  <h2 className="block-title line-top">{_.get(section, 'title')}</h2>
                  }
                  {_.get(section, 'subtitle') && 
                  <p className="block-subtitle">{htmlToReact(_.get(section, 'subtitle'))}</p>
                  }
                </div>
                }
                <div className="block-content">
                  <div className={'portfolio-feed layout-' + _.get(section, 'layout_style')}>
                    {
                    _.map(recent_projects, (post, post_idx) => (
                    <article key={post_idx} className="project">
                      {(((post_idx === post_len - 1) && _.get(section, 'view_all_label')) && _.get(section, 'view_all_url')) ? 
                      <Link to={safePrefix(_.get(section, 'view_all_url'))} className="project-link view-all-link">
                        {_.get(post, 'frontmatter.thumb_image') && 
                        <div className="project-thumbnail">
                          <img src={safePrefix(_.get(post, 'frontmatter.thumb_image'))} alt={_.get(post, 'frontmatter.title')} />
                        </div>
                        }
                        <span className="view-all-button">{_.get(section, 'view_all_label')}</span>
                      </Link>
                       : 
                      <Link to={safePrefix(_.get(post, 'url'))} className="project-link">
                        {_.get(post, 'frontmatter.thumb_image') && 
                        <div className="project-thumbnail">
                          <img src={safePrefix(_.get(post, 'frontmatter.thumb_image'))} alt={_.get(post, 'frontmatter.title')} />
                        </div>
                        }
                        <header className="project-header">
                          <h3 className="project-title">{_.get(post, 'frontmatter.title')}</h3>
                        </header>
                      </Link>
                      }
                    </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
