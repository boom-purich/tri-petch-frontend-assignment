const getDetailContentOrderNumber = (index = 0) => {
  return index + 1 < 10 ? `0${index + 1}` : index + 1;
};

export { getDetailContentOrderNumber }