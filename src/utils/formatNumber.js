function formatNumber(value) {
  try {
    const pValue = parseInt(value, 10);

    return pValue > 0 && pValue < Number.MAX_SAFE_INTEGER
      ? pValue
      : 0;
  } catch (e) {
    return 0;
  }
}

export default formatNumber;
