function contador(state = 0, action) {
  switch (action.type) {
    case "incrementar":
      return state + 1;

    default:
      return state;
  }
}

export default contador;
