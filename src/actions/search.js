import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return function(dispatch) {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {
      changeVideoList(videos);
      changeVideo(videos[0]);
    })
  }
    // return function(dispatch) {
    //   dispatch({
    //     type: 'CHANGE_VIDEO_LIST',
    //     videos: data
    //   });

    // fetch(YOUTUBE_API_KEY)
    //   // .then(response => response.json())
    //   .then(data => dispatch({
    //       type: 'VIDEO_RECEIVED',
    //       payload: data
    //     }))
    //   .catch(error => dispatch({
    //       type: 'VIDEO_FAILED',
    //       payload: error
    //     })
    //   );
    // }
};



export default handleVideoSearch;
