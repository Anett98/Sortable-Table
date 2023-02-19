import { useState, useContext } from "react";
import { Context } from "../../App";
import { BiSortAlt2 } from "react-icons/bi";

function Table() {
  const [isClickedName, setIsClickedName] = useState(false);
  const [isClickedNumber, setIsClickedNumber] = useState(false);
  const [isClickedCountry, setIsClickedCountry] = useState(false);
  const { data, setData } = useContext(Context);

  const handleNameSorting = () => {
    if (localStorage.getItem("initialData")) {
      setData(
        JSON.parse(localStorage.getItem("initialData")).sort((a, b) =>
          !isClickedName
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        )
      );
      setIsClickedName(!isClickedName);
    }
  };
  const handlerangeNumberSorting = () => {
    if (localStorage.getItem("initialData")) {
      setData(
        JSON.parse(localStorage.getItem("initialData")).sort((a, b) =>
          !isClickedNumber
            ? a.numberrange - b.numberrange
            : b.numberrange - a.numberrange
        )
      );
      setIsClickedNumber(!isClickedNumber);
    }
  };

  const handleCountrySorting = () => {
    if (localStorage.getItem("initialData")) {
      setData(
        JSON.parse(localStorage.getItem("initialData")).sort((a, b) =>
          !isClickedCountry
            ? a.country.localeCompare(b.country)
            : b.country.localeCompare(a.country)
        )
      );
      setIsClickedCountry(!isClickedCountry);
    }
  };

  return (
    <div className="Container">
      <table>
        <thead>
          <tr>
            <th className="name" tabIndex="0" onClick={handleNameSorting}>
              Name <BiSortAlt2 />
            </th>
            <th>Phone</th>
            <th
              className="number"
              tabIndex="0"
              onClick={handlerangeNumberSorting}
            >
              RangeNumber <BiSortAlt2 />
            </th>
            <th>Email</th>
            <th className="country" tabIndex="0" onClick={handleCountrySorting}>
              Country <BiSortAlt2 />
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((person) => {
            return (
              <tr key={person.email}>
                <td>{person.name}</td>
                <td>{person.phone}</td>
                <td>{person.numberrange}</td>
                <td>{person.email}</td>
                <td>{person.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
