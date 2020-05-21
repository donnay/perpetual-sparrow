import React from 'react';
import _ from 'lodash';

import {Link, classNames, safePrefix} from '../utils';

export default class CtaButtons extends React.Component {
    render() {
        let actions = _.get(this.props, 'actions');
        return (
            _.map(actions, (action, action_idx) => (
            <Link key={action_idx} className={classNames({'button': _.get(action, 'type') === 'button'})} to={safePrefix(_.get(action, 'url'))} {...(_.get(action, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(action, 'label')}</Link>
            ))
        );
    }
}
