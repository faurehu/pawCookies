const initialState = [];

export default function cookieJar(state = initialState, action) {
  switch (action.type) {
  case 'RECEIVE_COOKIES':
    return action.cookies.slice();
  default:
    return state;
  }
}
