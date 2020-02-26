import React, { useState } from 'react';

export const Select = () => {
  let options = [
    { key: 'o1', value: 'Option 1' },
    { key: 'o2', value: 'Option 2' },
    { key: 'o3', value: 'Option 3' },
    { key: 'o4', value: 'Option 4' },
    { key: 'o5', value: 'Option 5' }
  ];

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState('Select');

  const onOpen = () => {
    setOpened(!opened);
  };

  const onSelect = option => {
    setSelected(option);
    setOpened(false);
  };

  let cssClass = opened ? 'show' : 'hide';

  return (
    <div className="select" onClick={onOpen}>
      <span>{selected}</span>
      <ul className={cssClass}>
        {options.map(o => (
          <li>
            <a href="#" onClick={onSelect}>
              {o.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    e.preventDefault();
    this.props.onSelect(this.props.option);
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.onSelect}>
          {this.props.option.value}
        </a>
      </li>
    );
  }
}
