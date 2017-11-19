import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  videos: [],
  channels: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_VIDEOS':
      return { ...state,
        videos: action.payload,
      };
    case 'LOAD_CHANNELS':
      return { ...state,
        channels: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

store.dispatch({
  type: 'LOAD_VIDEOS',
  payload: [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://i.ytimg.com/vi/blJal9TdFmQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB_aBcv8zlp-wkzXNLRpIkZN5e1Xw',
      channel_id: 1,
    },

    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://i.ytimg.com/vi/jHubmkOe-MQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWulbNZUl9RUXID1gv2orTZB2YoA',
      channel_id: 1,
    },

    {
      id: 3,
      title: 'Video 3',
      thumbnail: 'https://i.ytimg.com/vi/51OMFYGG-fs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAbCk9v_1yOQtvfHkoxFH9KNzRxoA',
      channel_id: 2,
    },
  ]
});

store.dispatch({
  type: 'LOAD_CHANNELS',
  payload: {
    1: {
      id: 1,
      title: 'Music videos',
    },
    2: {
      id: 2,
      title: 'Instructional',
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
