import getRandomGreeting from "../../module/greetingAPI";

const GET_GREETING = 'app/greeting/GET_GREETING';

export default function greetingReducer(state = '', action) {
  switch (action.type) {
    case GET_GREETING:
      return action.greeting;
    default:
      return state;
  }
}

export const getGreeting = () => async (dispatch) => {
  const data = await getRandomGreeting();
  dispatch({
    type: GET_GREETING,
    greeting: data.greeting
  });
}
