import React, { useCallback, useRef, useState } from 'react';
import ReactTags from 'react-tag-autocomplete';
// https://github.com/i-like-robots/react-tags#delimiters-optional

export default function Tags() {
  const [tags, setTags] = useState([]);

  function onAddition(newTag) {
    setTags([...tags, newTag]);
  }

  const [suggestions, setSuggestions] = useState([
    { name: 'dance' },
    { name: 'coding' },
    { name: 'music' },
    { name: 'unsw' },
    { name: 'reading' },
    { name: 'eating' },
    { name: 'sleeping' },
    { name: 'dessert' },
  ]);

  const reactTags = useRef();

  const onDelete = useCallback(
    (tagIndex) => {
      setTags(tags.filter((_, i) => i !== tagIndex));
    },
    [tags]
  );

  return (
    <ReactTags
      ref={reactTags}
      tags={tags}
      suggestions={suggestions}
      placeholderText='Add your interests'
      onDelete={onDelete}
      onAddition={onAddition}
      allowNew={true}
      removeButtonText='x'
      autoresize={true}
    />
  );
}
