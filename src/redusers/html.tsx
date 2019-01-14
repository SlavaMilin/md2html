const initialState: string = "#Тестовый заголовок";

const html = (state = initialState, action: { type: string; payload: any }) => {
  if (action.type === "HTML_MARKUP") {
    return action.payload;
  }

  return state;
};

export default html;
