import React from 'react';
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';
import ScriptTag from 'react-script-tag';
import Link from './link';
import _ from 'lodash';

const convertChildren = (children, index) => _.map(children, childNode => convertNodeToElement(childNode, index, _.noop()));

export default function(html) {
    if (!html) {
        return null;
    }
    return ReactHtmlParser(html, {
        transform: (node, index) => {
            if (node.type === 'script') {
                if (!_.isEmpty(node.children)) {
                    return (
                        <ScriptTag key={index} {...node.attribs}>
                            {convertChildren(node.children, index)}
                        </ScriptTag>
                    );
                } else {
                    return <ScriptTag key={index} {...node.attribs}/>;
                }
            } else if (node.type === 'tag' && node.name === 'a') {
                return <Link key={index} to={node.attribs.href} {...node.attribs}>{convertChildren(node.children, index)}</Link>
            }
        }
    });
};
