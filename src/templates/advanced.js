import React from 'react';
import _ from 'lodash';

import components, {Layout} from '../components/index';

export default class Advanced extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            {(!_.get(this.props, 'pageContext.frontmatter.hide_title')) && 
            <header className="page-header inner-sm outer">
              <h1 className="page-title line-top">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
            </header>
            }
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type')));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
            </Layout>
        );
    }
}
