import React, { useState } from "react";
/* import PropTypes from 'prop-types' */

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      /* setCategories((cats) => [...cats,inputValue]) */
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <>
      {/* <h1>{inputValue}</h1> */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

/**prototypes se utilizan
 * para un desarrollo entre varios
 * desarrolladores
 */

/* AddCategory.PropTypes={
  setCategories: PropTypes.func.isRequired
} */
