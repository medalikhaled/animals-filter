/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable tailwindcss/no-custom-classname */
import "./App.css";
import Search from "./Search";
import {useState, useEffect} from 'react'

interface Animal {
  id: number,
  type: string,
  age: number,
  name: string,
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    getAnimal();
  }, [searchTerm]);

  async function getAnimal() {
    const res = await fetch(`http://localhost:8080/?q=${searchTerm}`);
    const data: Animal[] = await res.json();
    setAnimals(data);
  }

  return (
    <div className="container bg-[#C05454]">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="results-container overflow-x-auto pt-4">
        <table className="table w-full">
        <thead>
          <tr>
            <th />
            <th>type</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          
      </thead>
      <tbody>
        {animals.length === 0 ? "No Animals found!"  : animals.map((animal: Animal) => (
            <AnimalN animal={animal} key={animal.id} />
        ))}
      </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;


// Animal comoponent 
function AnimalN({animal}: {animal: Animal}) {
  return (
      <tr>
        <th></th>
        <td>
          {animal.type}
        </td>
        <td>
          {animal.name}
        </td>
        <td>
          {animal.age}
        </td>
      </tr>
  );
}
  