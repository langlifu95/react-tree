import React, { Component } from 'react';
import styled from 'styled-components';
import Tree from './Tree';
import { Node } from './TreeNode';

const StyledFileExplorer = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;  
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

export default class FileExplorer extends Component { 
  state = {
    selectedFile: null,
  };

  onSelect = (file: Node) => this.setState({ selectedFile: file });

  render() {
    const { selectedFile } = this.state;

    return (
      <StyledFileExplorer>
        <TreeWrapper>
          <Tree onSelect={this.onSelect} />
        </TreeWrapper>
        <div>
          {/* { selectedFile && selectedFile.type === 'file' && selectedFile.content } */}
        </div>
      </StyledFileExplorer>
    )
  }
}