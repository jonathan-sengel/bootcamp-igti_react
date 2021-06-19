import { useEffect, useState } from 'react';
import _ from 'lodash';
import ElectionCandidateCard from '../components/ElectionCandidateCard';
import ElectionInfo from '../components/ElectionInfo';
import Header from '../components/Header';
import Main from '../components/Main';
import Select from '../components/Select';
import {
  apiGetCityElections,
  apiGetCitiesList,
  apiGetAllCandidatesData,
  apiGetElectionList,
} from '../services/apiService';

export default function ElectionsPage() {
  const [todosCandidatos, setTodosCandidatos] = useState(null);
  const [todasCidades, setTodasCidades] = useState(null);
  const [todasEleicoes, setTodasEleicoes] = useState('');

  const [idCidade, setIdCidade] = useState('');
  const [cidadeSelecionada, setCidadeSelecionada] = useState('');
  const [
    candidatosConcorrendoCidadeAtual,
    setCandidatosConcorrendoCidadeAtual,
  ] = useState([]);
  const [
    candidatosConcorrendoCidadeAtualComDados,
    setCandidatosConcorrendoCidadeAtualComDados,
  ] = useState([]);

  useEffect(() => {
    (async function () {
      const tmpAllCities = await apiGetCitiesList();
      setTodasCidades(tmpAllCities);

      const tmpAllCandidates = await apiGetAllCandidatesData();
      setTodosCandidatos(tmpAllCandidates);

      const tmpAllElections = await apiGetElectionList();
      setTodasEleicoes(tmpAllElections);

      setIdCidade(tmpAllCities[0].id);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (todosCandidatos) {
        const listinha = [];
        const tmpFilteredElections = await apiGetCityElections(idCidade);
        let selectedCandidates = todosCandidatos.filter(candidate => {
          if (
            tmpFilteredElections.find(el => {
              if (el.candidateId === candidate.id) {
                candidate = { ...candidate, votes: el.votes };
                listinha.push(candidate);

                return true;
              } else return false;
            })
          ) {
            return true;
          }
          return false;
        });
        setCandidatosConcorrendoCidadeAtual(selectedCandidates);
        setCandidatosConcorrendoCidadeAtualComDados(listinha);
        const tmpAtualCity = todasCidades.find(city => city.id === idCidade);
        setCidadeSelecionada(tmpAtualCity);
      }
    })();
  }, [todosCandidatos, todasCidades, idCidade]);

  function handleSelectedCity(newCityId) {
    setIdCidade(newCityId);
  }
  return (
    <>
      <Header>Challenge module 2 - React Elections</Header>
      <Main>
        <Select
          descriptionLabel="Selecione o município:"
          onSelectCity={handleSelectedCity}
        >
          {todasCidades}
        </Select>
        <div className="border mt-6 p-2">
          <ElectionInfo
            candidatesList={candidatosConcorrendoCidadeAtualComDados}
            selectedCity={cidadeSelecionada}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {_.orderBy(
            candidatosConcorrendoCidadeAtualComDados,
            'votes',
            'desc'
          ).map((candidate, index) => {
            const status = index === 0 ? 'Eleito' : 'Não eleito';
            return (
              <ElectionCandidateCard
                key={candidate.id}
                candidateData={candidate}
                chosenCity={cidadeSelecionada}
                status={status}
              />
            );
          })}
        </div>
      </Main>
    </>
  );
}
