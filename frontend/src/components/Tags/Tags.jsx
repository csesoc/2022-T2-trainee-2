import React, { useCallback, useRef, useState } from 'react';
import ReactTags from 'react-tag-autocomplete';
// https://github.com/i-like-robots/react-tags#delimiters-optional

export default function Tags() {
  const [tags, setTags] = useState([]);

  function onAddition(newTag) {
    setTags([...tags, newTag]);
  }

  const [suggestions, setSuggestions] = useState([
    { id: 1, name: 'dance' },
    { id: 2, name: 'coding' },
    { id: 3, name: 'music' },
    { id: 4, name: 'unsw' },
    { id: 5, name: 'reading' },
    { id: 6, name: 'eating' },
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
      onDelete={onDelete}
      onAddition={onAddition}
      allowNew={true}
    />
  );
}
