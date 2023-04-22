import '../index.css';
import React, {useState} from 'react';

function App() {
 const [inputValue, setInputValue] = useState('');

 const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Submitted value:', inputValue);
};

  return (
    <div>
      <button>Insert</button>
      <form onSubmit={handleSubmit}>
      <label>
        Enter a value:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  ) 
}

export default App;
