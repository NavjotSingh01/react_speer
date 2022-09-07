const initialState = {
  isFetchingActivities: false,
  ctivitiesListReceived: false,
  activitiesList: null,

};

const callReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_ACTIVITIES_REQUEST":
      return Object.assign({}, state, {
        isFetchingActivities: true,
      });
    case "FETCHING_ACTIVITIES_RECEIVE":
      return Object.assign({}, state, {
        isFetchingActivities: false,
        activitiesList: action.activities,
        activitiesListReceived: true,
      });

    default:
      return state;
  }
};

export default callReducer;
