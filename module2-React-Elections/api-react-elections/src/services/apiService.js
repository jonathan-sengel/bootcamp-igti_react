import { getData } from './httpService';

export async function apiGetCitiesList() {
  const allCities = await getData('/cities');
  return allCities;
}
export async function apiGetElectionList() {
  const allElections = await getData('/election');
  return allElections;
}

export async function apiGetCityElections(cityId) {
  const allElections = await getData(`/election?cityId=${cityId}`);
  return allElections;
}

export async function apiGetAllCandidatesData() {
  const allCandidates = await getData('/candidates');
  return allCandidates;
}
