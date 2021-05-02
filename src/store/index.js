import { createStore } from 'vuex';

import videosModule from './modules/videos/index.js';

const store = createStore({
  modules: {
    videos: videosModule
  }
});

export default store;