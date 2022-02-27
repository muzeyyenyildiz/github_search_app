import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../stores/user";
import "./form.css";

const FormSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  
 


  const handleSubmit = (event) => {
    debugger
    event.preventDefault();
    if (!inputValue) {
      alert("Please enter a username!");
    } else {
      dispatch(setUser(inputValue.trim()));
    }
    setInputValue("");
  };
  

  return (
    <form className="submit-container" onSubmit={handleSubmit}>
      <input
        className="search-input"
        placeholder="Github Username"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="search-btn">Search</button>
    </form>
  );
};

export default FormSearch;
