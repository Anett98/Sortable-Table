import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";

export default function Filter() {
  const [inputVal, setInputVal] = useState("");
  const { setData } = useContext(Context);

  useEffect(() => {
    let timeId = setTimeout(() => {
      if (localStorage.getItem("initialData")) {
        setData(
          JSON.parse(localStorage.getItem("initialData")).filter((user) =>
            user.name
              .toLocaleLowerCase()
              .includes(inputVal.trim().toLocaleLowerCase())
          )
        );
      }
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [inputVal, setData]);

  const handleFilter = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <input
      placeholder="Enter the name"
      className="filter"
      type="text"
      value={inputVal}
      onChange={(e) => handleFilter(e)}
    />
  );
}
