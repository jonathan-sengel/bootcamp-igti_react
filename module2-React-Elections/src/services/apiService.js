import getData from './httpService';

const CACHE = {};

export async function apiGetAllCities() {
  const allCities = await getData('/cities');
  const orderedCities = allCities.sort((a, b) => a.name.localeCompare(b.name));
  CACHE['cities'] = orderedCities;
  return orderedCities;
}

export async function apiGetAllCandidates() {
  const allCandidates = await getData('/candidates');
  CACHE['candidates'] = allCandidates;
  return allCandidates;
}

export async function apiGetElectionFromCity(cityId) {
  const chosenCity = CACHE['cities'].find(city => city.id === cityId);

  const electionResult = await getData(`/election?cityId=${cityId}`);
  const electionFinalData = electionResult.map((electionCandidate, index) => {
    const percentage = electionCandidate.votes / (chosenCity.presence / 100);
    let { name } = CACHE['candidates'].find(
      candidate => candidate.id === electionCandidate.candidateId
    );
    let elected = false;
    return { candidateName: name, percentage, elected, ...electionCandidate };
  });

  const orderedFinalData = electionFinalData.sort((a, b) => b.votes - a.votes);
  CACHE['electionData'] = orderedFinalData;
  orderedFinalData[0].elected = true;
  return orderedFinalData;
}
