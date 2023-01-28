const getStyle = (element, prop) =>
  parseInt(window.getComputedStyle(element).getPropertyValue(prop))

const getPseudoStyle = (element, pseudoElement, prop) =>
  parseInt(
    window.getComputedStyle(element, `${pseudoElement}`).getPropertyValue(prop),
  )
