import React, { useEffect, useState } from 'react';
import './OutraPagina.css';
import { getAllDigimon } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Importe ícones gratuitos

const OutraPagina = () => {
  const [digimon, setDigimon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const digimonPerPage = 8; // Agora você quer 8 Digimon por página
  const [searchTerm, setSearchTerm] = useState('');

  async function getDigimon() {
    const res = await getAllDigimon();
    setDigimon(res);
  }

  useEffect(() => {
    getDigimon();
  }, []);

  const filteredDigimon = digimon.filter((digi) =>
    digi.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDigimon = currentPage * digimonPerPage;
  const indexOfFirstDigimon = indexOfLastDigimon - digimonPerPage;
  const currentDigimon = filteredDigimon.slice(
    indexOfFirstDigimon,
    indexOfLastDigimon
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="Principal">
        <h1>Digimon</h1>
        {/* Estilize a barra de pesquisa aqui */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar Digimon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="digimonContainer">
          <div className="horizontal-digimon-container">
            {currentDigimon.map((digi) => (
              <div className="digimonBox" key={digi.name}>
                <img src={digi.img} alt="" className="digimonImg" />
                <h2 className="digimonName">{digi.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          {Array.from({
            length: Math.ceil(filteredDigimon.length / digimonPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default OutraPagina;
