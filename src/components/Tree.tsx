import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';

import TreeNode, { Node } from './TreeNode';
import data from '../data/tree-data.json';


type Props = {
  onSelect: (node: Node) => void;
};

class Tree extends Component<Props> {

  state = {
    nodes: data,
  };

  findNode = (path: string) => {
    const { nodes } = this.state;
    return nodes.find((node: Node) => node.path === path);
  }

  getRootNodes = () => {
    const { nodes } = this.state;
    return nodes.filter((node: Node) => node.isRoot === true);
  }

  getChildNodes = (node: Node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map((path: string) => this.findNode(path))
            .filter((node: Node | undefined) : node is Node => (node !== undefined)).map((node: Node) => node);
  }  

  onToggle = (node: Node) => {
    const { nodes } = this.state;
    node.isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect = (node: Node) => {
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (
          <TreeNode 
            node={node}
            getChildNodes={this.getChildNodes}
            // getChildNodes={(node) => ([node])}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Tree;