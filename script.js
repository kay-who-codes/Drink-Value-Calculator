function addCalculatorListeners(calculatorId) {
  const priceInput = document.getElementById(`price${calculatorId}`);
  const volumeInput = document.getElementById(`volume${calculatorId}`);
  const abvInput = document.getElementById(`abv${calculatorId}`);
  const resultElement = document.getElementById(`result${calculatorId}`);

  function calculateAlcoholValue() {
    const price = parseFloat(priceInput.value) || 0;
    const volume = parseFloat(volumeInput.value) || 0;
    const abv = parseFloat(abvInput.value) || 0;

    if (price > 0 && volume > 0 && abv > 0) {
      const value = (volume / price) * (abv / 100);
      resultElement.textContent = `Alcohol Value: ${value.toFixed(2)}`;
    } else {
      resultElement.textContent = 'Alcohol Value: --';
    }
  }

  priceInput.addEventListener('input', calculateAlcoholValue);
  priceInput.addEventListener('change', calculateAlcoholValue);
  volumeInput.addEventListener('input', calculateAlcoholValue);
  volumeInput.addEventListener('change', calculateAlcoholValue);
  abvInput.addEventListener('input', calculateAlcoholValue);
  abvInput.addEventListener('change', calculateAlcoholValue);
}

// Add event listeners for all 4 calculators
[1, 2, 3, 4].forEach(addCalculatorListeners);
