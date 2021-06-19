export default function ElectionInfo({ selectedCity, candidatesList = [] }) {
  if (selectedCity) {
    return (
      <div className="flex flex-col items-center space-y-4 text-sm">
        <h2 className="text-lg">
          <strong>Eleição em {selectedCity.name}</strong>
        </h2>
        <div className="space-x-4">
          <span>
            <strong>Total de eleitores: </strong>
            {selectedCity.votingPopulation.toLocaleString('pt-BR')}
          </span>
          <span>
            <strong>Abstenção: </strong>
            {selectedCity.absence.toLocaleString('pt-BR')}
          </span>
          <span>
            <strong>Comparecimento: </strong>
            {selectedCity.presence.toLocaleString('pt-BR')}
          </span>
        </div>
        <div className="font-semibold">{`${candidatesList.length} candidatos`}</div>
      </div>
    );
  } else return null;
}
