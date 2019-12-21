import React, { useState, useEffect } from 'react';
import { Graph } from 'react-d3-graph';
import { getWords } from '../services/wordAPI.js';

// graph payload (with minimalist structure)
const initialData = {
  nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
  links: [
    { source: 'Harry', target: 'Sally' },
    { source: 'Harry', target: 'Alice' }
  ]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: 'lightgreen',
    size: 400,
    fontSize: 14,
    highlightStrokeColor: 'blue',
    symbolType: 'cross'
  },
  link: {
    highlightColor: 'lightblue'
  }
};

// const onDoubleClickNode = function(nodeId) {
//   window.alert(`Double clicked node ${nodeId}`);
// };

// const onRightClickNode = function(event, nodeId) {
//   window.alert(`Right clicked node ${nodeId}`);
// };

// const onMouseOverNode = function(nodeId) {
//   window.alert(`Mouse over node ${nodeId}`);
// };

// const onMouseOutNode = function(nodeId) {
//   window.alert(`Mouse out node ${nodeId}`);
// };

const WordGraph = data => {
  const [words, setWords] = useState(initialData);

  useEffect(() => {
    setWords(data.data);
  }, [data]);

  const onClickNode = nodeId => {};

  return (
    <div>
      <Graph
        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
        data={words}
        config={myConfig}
        onClickNode={onClickNode}
      />
      ;
    </div>
  );
};

WordGraph.defaultProps = {
  data: initialData
};
export default WordGraph;
