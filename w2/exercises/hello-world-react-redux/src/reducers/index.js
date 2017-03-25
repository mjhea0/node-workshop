function reducer(state=0, action) {
  if (action.type === 'INCREMENT') {
    return ++state;
  }
  return state;
}

export default reducer;
