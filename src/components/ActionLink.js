import React from 'react';
import _ from 'lodash';

import {Link, classNames, safePrefix} from '../utils';

export default class ActionLink extends React.Component {
    render() {
        let action = _.get(this.props, 'action');
        return (
            <Link className={classNames({'button': _.get(action, 'type') === 'button', 'button-icon': _.get(action, 'type') === 'icon'})} to={safePrefix(_.get(action, 'url'))} {...(_.get(action, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>
              {((_.get(action, 'type') === 'icon') && _.get(action, 'icon_class')) ? <React.Fragment>
              <span className={'icon fab ' + _.get(action, 'icon_class')} aria-hidden="true"/><span className="screen-reader-text">{_.get(action, 'label')}</span>
              </React.Fragment> : 
              _.get(action, 'label')
              }
            </Link>
        );
    }
}
