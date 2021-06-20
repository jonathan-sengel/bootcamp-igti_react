import { useEffect, useState } from 'react';

import {
  apiGetAllCandidates,
  apiGetAllCities,
  apiGetElectionFromCity,
} from '../services/apiService';

import Header from '../components/Header';
import Main from '../components/Main';
import Select from '../components/Select';
import ElectionInfo from '../components/ElectionInfo';
import Loader from '../components/Loader';
import ElectionCandidateCard from '../components/ElectionCandidateCard';

export default function ElectionsPage() {
  const [cities, setCities] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loadingCity, setLoadingCity] = useState(true);

  const [selectedCity, setSelectedCity] = useState('');
  const [elections, setElections] = useState([]);

  useEffect(() => {
    async function getCities() {
      const apiCities = await apiGetAllCities();
      const apiCandidates = await apiGetAllCandidates();

      setCities(apiCities);
      setCandidates(apiCandidates);
      setSelectedCity(apiCities[0]);

      setTimeout(() => {
        setLoadingPage(false);
      }, 500);
    }
    getCities();
  }, []);

  useEffect(() => {
    if (!selectedCity) return;
    async function getElection() {
      const actualElection = await apiGetElectionFromCity(selectedCity.id);
      setElections(actualElection);

      setTimeout(() => {
        setLoadingCity(false);
      }, 500);
    }
    getElection();
  }, [selectedCity]);

  function handleSelectOption(cityId) {
    const chosenCity = cities.find(item => item.id === cityId);
    setLoadingCity(true);
    setSelectedCity(chosenCity);
  }

  let navJsx = (
    <div className="text-center">
      <Loader />
    </div>
  );
  let mainJsx = <></>;

  if (!loadingPage) {
    navJsx = (
      <Select
        descriptionLabel="Selecione o Município:"
        onSelectOpt={handleSelectOption}
      >
        {cities}
      </Select>
    );
    mainJsx = (
      <div className="text-center">
        <Loader />
      </div>
    );
  }
  if (!loadingCity) {
    mainJsx = (
      <div className="flex flex-col items-center justify-center space-y-5">
        <ElectionInfo
          selectedCity={selectedCity}
          candidateQuantity={elections.length}
        />
        <ul className="sm:w-3/4 w-full">
          {elections.map(item => {
            return (
              <ElectionCandidateCard key={item.id} selectedCity={selectedCity}>
                {item}
              </ElectionCandidateCard>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className="w-11/12 max-w-screen-2xl mx-auto mt-2 space-y-3">
        <div>
          <Header>React Elections - Module II Challenge [IGTI]</Header>
          <nav className="bg-$gray50 p-2">{navJsx}</nav>
        </div>
        <div>
          <Main>{mainJsx}</Main>
        </div>
      </div>
    </>
  );
}
