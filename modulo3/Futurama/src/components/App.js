import '../styles/App.scss';
import '../styles/Header.scss';
import { useEffect, useState } from 'react';
import { callToApi } from '../services/api';
// import ls from '../services/localStorage';
// import { Link, Route, Routes } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './Header';
import CharactersList from './CharactersList';
function App() {
  const [data, setData] = useState([]);
  const [specieSelected, setSpecieSelected] = useState('');

  // Recojo los datos de la API y los meto en data
  useEffect(() => {
    callToApi().then((response) => setData(response));
  }, []);
  console.log(data);

  const handleSpecieSelect = (value) => {
    console.log(value);

    if (value === data.species) {
    } else {
    }
  };
  return (
    <>
      <Header
        specieSelected={specieSelected}
        handleSpecieSelect={handleSpecieSelect}
      />
      {/* // Buscar por personaje con un input */}

      <CharactersList data={data} />
    </>
  );
}

export { App };
