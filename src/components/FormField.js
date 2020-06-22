import React from 'react';
import _ from 'lodash';

export default class FormField extends React.Component {
    render() {
        let field = _.get(this.props, 'field');
        return (
            (_.get(field, 'type') === 'checkbox') ? 
            <div className="form-group form-checkbox">
              <input type="checkbox" id={_.get(field, 'name')} name={_.get(field, 'name')}{...(_.get(field, 'is_required') ? {required: true} : null)}/>
              {_.get(field, 'label') && 
              <label htmlFor={_.get(field, 'name')}>{_.get(field, 'label')}</label>
              }
            </div>
             : ((_.get(field, 'type') === 'select') ? 
            <div className="form-group">
              {_.get(field, 'label') && 
              <label htmlFor={_.get(field, 'name')}>{_.get(field, 'label')}</label>
              }
              <div className="form-select-wrap">
                <select name={_.get(field, 'name')}{...(_.get(field, 'is_required') ? {required: true} : null)}>
                  {_.get(field, 'default_value') && 
                  <option value="">{_.get(field, 'default_value')}</option>
                  }
                  {_.map(_.get(field, 'options'), (option, option_idx) => (
                  <option key={option_idx} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
             : ((_.get(field, 'type') === 'textarea') ? 
            <div className="form-group">
              {_.get(field, 'label') && 
              <label htmlFor={_.get(field, 'name')}>{_.get(field, 'label')}</label>
              }
              <textarea name={_.get(field, 'name')} id={_.get(field, 'name')} rows="5"{...(_.get(field, 'default_value') ? {placeholder: _.get(field, 'default_value')} : null)}{...(_.get(field, 'is_required') ? {required: true} : null)}/>
              <span className="animate-border" aria-hidden="true" />
            </div>
             : 
            <div className="form-group">
              {_.get(field, 'label') && 
              <label htmlFor={_.get(field, 'name')}>{_.get(field, 'label')}</label>
              }
              <input type={_.get(field, 'type')} name={_.get(field, 'name')} id={_.get(field, 'name')}{...(_.get(field, 'default_value') ? {placeholder: _.get(field, 'default_value')} : null)}{...(_.get(field, 'is_required') ? {required: true} : null)} />
              <span className="animate-border" aria-hidden="true" />
            </div>
            ))
        );
    }
}
