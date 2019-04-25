import Redux from 'redux';
// import changeVideo from '../actions/currentVideo';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (state === undefined) {
    state = null;
  }

  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return state;
  }

};

export default currentVideoReducer;
