import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';
import FormField from './FormField';

export default class SectionForm extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className="block block-form outer">
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
                <div className="block-content inner-sm">
                  {_.get(section, 'content') && 
                  markdownify(_.get(section, 'content'))
                  }
                  <form name={_.get(section, 'form_id')} id={_.get(section, 'form_id')} {...(_.get(section, 'form_action') ? {action: _.get(section, 'form_action')} : null)}method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <div className="screen-reader-text">
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </div>
                    <input type="hidden" name="form-name" value={_.get(section, 'form_id')} />
                    {_.map(_.get(section, 'form_fields'), (field, field_idx) => (
                      <FormField key={field_idx} {...this.props} field={field} />
                    ))}
                    <div className="form-submit">
                      <button type="submit" className="button">{_.get(section, 'submit_label')}</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
        );
    }
}
