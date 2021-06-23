import {
  helperFormatNumber,
  helperFormatPercentage,
} from '../helpers/dataFormatter';

export default function ElectionCandidateCard({ children, selectedCity }) {
  const { candidateName, percentage, votes, elected } = children;
  const img = `./img/${candidateName}.png`;

  let status = elected ? 'Eleito' : 'Não Eleito';
  let progressClass = elected ? 'progress-elected' : 'progress-not-elected';
  let bgColorClass = elected ? 'bg-green600' : 'bg-red600';
  let txtcolorClass = elected ? 'txt-green600' : 'txt-red600';

  return (
    <li className="flex items-center w-full p-2 gap-2">
      <img
        className="rounded-full w-16 h-16"
        src={img}
        alt={`imagem do ${candidateName}`}
        title={candidateName}
      />
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between leading-5">
          <div>
            <div>
              <strong>{candidateName}</strong>
            </div>
            <span
              className={`status text-xs text-white uppercase ${bgColorClass}`}
            >
              {status}
            </span>
          </div>
          <div className="text-right">
            <div>
              <strong className={txtcolorClass}>
                {helperFormatPercentage(percentage)}
              </strong>
            </div>
            <div className="text-sm">{` ${helperFormatNumber(
              votes
            )} votos`}</div>
          </div>
        </div>
        <div className="leading-3">
          <progress
            className={`w-full h-1 ${progressClass}`}
            value={votes}
            max={selectedCity.presence}
          ></progress>
        </div>
      </div>
    </li>
  );
}
