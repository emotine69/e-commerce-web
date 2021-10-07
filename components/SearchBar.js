import { TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestion] = useState(false);
  const [input, setInput] = useState('');

  const onChange = (e) => {
    const userInput = e.target.value;
    //filter our suggestions that don't contain user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion
          .toString()
          .toLowerCase()
          .indexOf(userInput.toString().toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestion(true);
  };

  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestion(false);
  };

  const SuggestionListComponent = () => {
    return filteredSuggestions.length ? (
      <ul class="suggestions" style={{ listStyleType: 'none' }}>
        {filteredSuggestions.map((suggestion, index) => {
          let className;

          if (index === activeSuggestionIndex) {
            className = 'suggestion-active';
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>No suggestions, you're on your own!</em>
      </div>
    );
  };

  return (
    <>
      <TextField
        fullWidth
        type="text"
        onChange={onChange}
        value={input}
        variant="outlined"
        label="Looking for something"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {showSuggestions && input && <SuggestionListComponent />}
    </>
  );
};

export default SearchBar;
