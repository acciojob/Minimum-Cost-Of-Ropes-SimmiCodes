function findMinimumCostRopes(ropes) {
  const ropeLengths = ropes.split(',').map(Number);

  let totalCost = 0;
  while (ropeLengths.length > 1) {
    const [minIndex1, minIndex2] = findTwoSmallestIndices(ropeLengths);

    
    const cost = ropeLengths[minIndex1] + ropeLengths[minIndex2];

    
    totalCost += cost;

    
    ropeLengths.splice(minIndex1, 1);
    ropeLengths.splice(minIndex2 - 1, 1, cost);
  }

  return totalCost;
}

function findTwoSmallestIndices(arr) {
  let minIndex1 = 0;
  let minIndex2 = 1;

  if (arr[minIndex1] > arr[minIndex2]) {
    minIndex1 = 1;
    minIndex2 = 0;
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < arr[minIndex1]) {
      minIndex2 = minIndex1;
      minIndex1 = i;
    } else if (arr[i] < arr[minIndex2]) {
      minIndex2 = i;
    }
  }

  return [minIndex1, minIndex2];
}


function handleSubmit() {
  const inputElement = document.getElementById('input');
  const resultElement = document.getElementById('result');

  const ropes = inputElement.value;

  const minimumCost = findMinimumCostRopes(ropes);
  resultElement.innerHTML = `Minimum Cost of Ropes: ${minimumCost}`;
}


const form = document.getElementById('ropeForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  handleSubmit();
});

