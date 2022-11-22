import axios from 'axios';

const DISPLAY_ROCKET = 'react-redux-group-project/rockets/DISPLAY_ROCKET';
const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const RESERVE_ROCKET = 'react-redux-group-project/rockets/RESERVE_ROCKET';
const REMOVE_RESERVATION = 'react-redux-group-project/rockets/REMOVE_RESERVATION';

const initialState = [];

export const displayRocket = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_ROCKET,
    payload: response.data,
  });
};

export const reserveRocket = (rocket) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: RESERVE_ROCKET,
      payload: rocket,
    });
  } catch (err) {
    return err;
  }
};
export const cancelReserve = (rocket) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: REMOVE_RESERVATION,
      payload: rocket,
    });
  } catch (err) {
    return err;
  }
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload.id) { return rocket; }
        return { ...rocket, reserved: true };
      });
    case REMOVE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload.id) { return rocket; }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default rocketReducer;
