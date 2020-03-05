import React from 'react';

import Select from 'react-select';

const options = [
  { value: 'zz', label: 'Select a Language' },
  { value: 'es', label: 'Spanish' },
  { value: 'ar', label: 'Arabic' },
  { value: 'it', label: 'Italian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ms', label: 'Malay' },
  { value: 'zh', label: 'Chinese (Simplified)' },
  { value: 'fa', label: 'Persian' },
  { value: 'dl', label: 'Dutch' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'id', label: 'Indonesian' },
  { value: 'hi', label: 'Hindi' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'sv', label: 'Swedish' },
  { value: 'ru', label: 'Russian' }
];

const Dropdown = ({ lang, setLang }) => {
  const handleChange = selectedOption => {
    setLang(selectedOption.value);
  };

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={options[0]}
      name="color"
      onChange={handleChange}
      options={options}
    />
  );
};

export default Dropdown;
