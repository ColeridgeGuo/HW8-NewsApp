import React from "react";
import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';
import {useHistory} from 'react-router-dom';

function SearchSelect() {
  
  let history = useHistory();
  
  const loadOptions = inputValue => {
    const url = `https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q=${inputValue}`;
    const headers = {
      headers: {
        'Ocp-Apim-Subscription-Key': '1c53051c700341a382e3dab0d0eaa43f'
      }
    };
    return fetch(url, headers)
      .then(res => res.json())
      .then(data => {
        return processOptions(data);
      })
      .catch(error => console.log(error));
  }
  
  const processOptions = data => {
    return data.suggestionGroups[0].searchSuggestions.map(
      option => ({value: option.displayText, label: option.displayText})
    )
  }
  
  const handleSelect = selectedValue => {
    history.push(`/search/${selectedValue.value}`)
  }
  
  return (
    <AsyncSelect
      name='autosuggest'
      className="autosuggest"
      placeholder="Enter Keyword .."
      loadOptions={debounce(loadOptions, 1000)}
      onChange={handleSelect}
      value=''
    />
  )
}

export default SearchSelect;