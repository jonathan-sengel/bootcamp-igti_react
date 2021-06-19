import _ from 'lodash';

export default function ElectionCandidateCard({
  candidateData = null,
  chosenCity = null,
  status,
}) {
  if (candidateData && chosenCity) {
    const percentual = candidateData.votes / (chosenCity.presence / 100);
    candidateData = { ...candidateData, percentual };
    return (
      <div className="w-60 h-44 p-2 m-4 shadow-md flex flex-col justify-between">
        <div className="flex justify-between">
          <img
            className="w-14 h-14 rounded-full"
            src={`./img/${candidateData.name}.png`}
            alt={`imagem do ${candidateData.name}`}
          />
          <div className="text-center">
            <h3>{`${candidateData.percentual.toFixed(2)}%`}</h3>
            <h4>{`${candidateData.votes.toLocaleString('pt-BR')} votos`}</h4>
          </div>
        </div>
        <div className="text-center space-y-4">
          <h3>{candidateData.name}</h3>
          <h4>{status}</h4>
        </div>
      </div>
    );
  } else return null;
}
