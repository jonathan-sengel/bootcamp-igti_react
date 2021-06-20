import { helperFormatNumber } from '../helpers/dataFormatter';

export default function ElectionInfo({
  selectedCity: { name, votingPopulation, absence, presence },
  candidateQuantity,
}) {
  return (
    <div className="flex flex-col items-center space-y-4 text-sm p-2 text-center">
      <h2 className="text-xs">
        <strong className="text-lg">Eleição em {name}</strong>
        <p>{` [${candidateQuantity} candidatos]`}</p>
      </h2>
      <div className="sm:flex-row  flex flex-col items-center justify-around gap-2 text-center">
        <span>
          <strong>Total de eleitores: </strong>
          {helperFormatNumber(votingPopulation)}
        </span>
        <span>
          <strong>Abstenção: </strong>
          {helperFormatNumber(absence)}
        </span>
        <span>
          <strong>Comparecimento: </strong>
          {helperFormatNumber(presence)}
        </span>
      </div>
    </div>
  );
}
