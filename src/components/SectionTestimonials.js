import React from 'react';
import _ from 'lodash';

import {htmlToReact, classNames, safePrefix} from '../utils';

export default class SectionTestimonials extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block block-testimonials outer">
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
                {_.get(section, 'testimonials') && 
                <div className="block-content">
                  <div className={classNames('grid', {'grid-col-2': _.get(section, 'col_number') === 'two', 'grid-col-3': _.get(section, 'col_number') === 'three'})}>
                    {_.map(_.get(section, 'testimonials'), (testimonial, testimonial_idx) => (
                    <div key={testimonial_idx} className="grid-item">
                      <blockquote className="testimonial">
                        <p className="testimonial-content">{htmlToReact(_.get(testimonial, 'content'))}</p>
                        <footer className="testimonial-footer">
                          {_.get(testimonial, 'avatar') && 
                          <img className="testimonial-avatar" src={safePrefix(_.get(testimonial, 'avatar'))} alt="Author avatar"/>
                          }
                          <cite className="testimonial-author">{_.get(testimonial, 'author')}</cite>
                        </footer>
                      </blockquote>
                    </div>
                    ))}
                  </div>
                </div>
                }
              </div>
            </section>
        );
    }
}
