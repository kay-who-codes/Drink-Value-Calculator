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
      resultElement.classList.add('has-value');

      // Calculate color based on value (4 = red, 20 = green)
      const normalizedValue = Math.min(Math.max(value, 4), 20); // Clamp value between 4 and 20
      const percentage = ((normalizedValue - 4) / (20 - 4)) * 100; // Convert to percentage
      resultElement.style.color = `hsl(${percentage * 1.2}, 100%, 50%)`; // HSL color interpolation
    } else {
      resultElement.textContent = 'Alcohol Value: --';
      resultElement.classList.remove('has-value');
      resultElement.style.color = '#888'; // Reset to grey
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
[1, 2, 3, 4, 5, 6].forEach(addCalculatorListeners);