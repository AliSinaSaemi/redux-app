export const increase = (num) => {
  return {
    type: 'INCREASE',
    payload: num
  }
}

export const decrease = () => {
  return {
    type: 'DECREASE'
  }
}