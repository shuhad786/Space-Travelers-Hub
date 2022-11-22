import axios from 'axios';

const DISPLAY_MISSION = 'react-redux-group-project/rockets/DISPLAY_MISSION';
const baseUrl = 'api.spacexdata.com/v3/missions';

const initialState = [];

export const displayMission = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_MISSION,
    payload: response.data,
  });
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSION:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
