import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block block-text outer">
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
                {_.get(section, 'image') && 
                <div className="block-image">
                  <img src={safePrefix(_.get(section, 'image'))} alt={_.get(section, 'title')} />
                </div>
                }
                {_.get(section, 'content') && 
                <div className="block-content inner-sm">
                  {markdownify(_.get(section, 'content'))}
                </div>
                }
                {_.get(section, 'actions') && 
                <div className="block-buttons inner-sm">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions')} />
                </div>
                }
              </div>
            </section>
        );
    }
}
