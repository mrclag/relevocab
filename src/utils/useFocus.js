import { useRef } from 'react';

// This hook allows the focus to be reset to a specific ref when form input

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

export default useFocus;
