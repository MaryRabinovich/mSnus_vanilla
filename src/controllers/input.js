const numCols = document.getElementById('num-cols')

const min = numCols.getAttribute('min')
const max = numCols.getAttribute('max')

numCols.addEventListener('change', () => {
    if (numCols.value < min) numCols.value = min
    if (numCols.value > max) numCols.value = max
    globalThis.state.set(numCols.id, numCols.value)
})