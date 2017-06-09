const reducer = (state=0, action) => {
  if (action.type === 'INCREMENT') return ++state;
  if (action.type === 'DECREMENT') return --state;
  return state;
};

export default reducer;
