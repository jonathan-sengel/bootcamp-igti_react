const numberFormater = Intl.NumberFormat('pt-BR');

export function helperFormatNumber(value) {
  const formattedNumber = numberFormater.format(value);
  return formattedNumber;
}

export function helperFormatPercentage(value) {
  const percentage = value.toFixed(2).replace('.', ',') + '%';
  return percentage;
}
