import React from "react";
import AsyncSelect from 'react-select/async';
import debounce from 'debounce-promise';

class SearchSelect extends React.Component {
  
  loadOptions = inputValue => {
    const url = `https://api.cognitive.microsoft.com/bing/v7.0/suggestions?q=${inputValue}`;
    const headers = {
      headers: {
        'Ocp-Apim-Subscription-Key': '1c53051c700341a382e3dab0d0eaa43f'
      }
    };
    return fetch(url, headers)
      .then(res => res.json())
      .then(data => {
        return this.processOptions(data);
      })
      .catch(error => console.log(error));
  }
  
  processOptions = data => {
    return data.suggestionGroups[0].searchSuggestions.map(
      option => ({value: option.displayText, label: option.displayText})
    )
  }
  
  handleSelect = selectedValue => {
    console.log(selectedValue)
  }
  
  render() {
    return (
      <AsyncSelect
        name='autosuggest'
        className="autosuggest"
        placeholder="Enter Keyword .."
        loadOptions={debounce(this.loadOptions, 500)}
        onChange={this.handleSelect}
      />
    )
  }
}

export default SearchSelect;