import { getNewId } from '../services/idService';

export default function Select({
  descriptionLabel = 'Descrição do Select',
  children: options,
  onSelectOpt = null,
  elementId = getNewId(),
  selectValue,
}) {
  function handleSelectCity(event) {
    if (onSelectOpt) {
      onSelectOpt(event.target.value);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <label htmlFor={elementId}>{descriptionLabel}</label>
      <select
        className="shadow-lg my-2 px-2 py-1 border-2 border-purple-200 rounded-md "
        name="elections"
        id={elementId}
        value={selectValue}
        onChange={handleSelectCity}
      >
        {options.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
