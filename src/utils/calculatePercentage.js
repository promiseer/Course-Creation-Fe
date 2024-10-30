function calculateCompletion(currentValue, targetValue) {
  if (
    isNaN(currentValue) ||
    isNaN(targetValue) ||
    currentValue === null ||
    targetValue === null
  ) {
    return "0";
  }
  if (targetValue === 0) {
    return "0";
  }

  const percentage = (currentValue / targetValue) * 100;
  return `${percentage.toFixed(2)}`;
}

export default calculateCompletion;
