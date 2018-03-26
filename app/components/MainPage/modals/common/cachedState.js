export const state = {
  cachedText: '',
  cachedUrl: '',
  cachedCode: ''
};

export function updateCache(event, prop) {
  const newState = {
    ...this.state,
    [prop]: event.target.value
  };
  const { cachedText, cachedUrl } = newState;
  const cachedCode = `[${cachedText}](${cachedUrl})`;
  // Update state
  this.setState({
    ...newState,
    cachedCode
  });
};
