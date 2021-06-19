import { getNewId } from '../services/idService';

export default function Select({
  descriptionLabel = 'Descrição do Select',
  children: citiesList,
  onSelectCity = null,
  selectId = getNewId(),
  value,
}) {
  function handleSelectCity(event) {
    if (onSelectCity) {
      onSelectCity(event.target.value);
    }
  }

  if (citiesList) {
    return (
      <div className="flex flex-col justify-center items-center">
        <label htmlFor={selectId}>{descriptionLabel}</label>
        <select
          className="shadow-lg my-2 px-2 py-1 border-2 border-purple-200 rounded-md "
          name="elections"
          id={selectId}
          value={value}
          onChange={handleSelectCity}
        >
          {citiesList.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    );
  } else return null;
}
