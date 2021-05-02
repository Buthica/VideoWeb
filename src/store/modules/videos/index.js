import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      videos: [
        {
          id: 'v1',
          title: "How to beat the new boss!!!",
          uploader: "SuperMario",
          description: "blah blah blah blah .......",
          views: "25",
          date: "02/03/2021",
          type: "Gaming",
        },
        {
          id: 'v2',
          title: "Marvel movie series",
          uploader: "SuperMan",
          description: "blah blah blah blah ....... SuperMan",
          views: "24",
          date: "02/03/2020",
          type: "Movie",
        },
        {
          id: 'v3',
          title: "Teaching how to teach!!!",
          uploader: "SuperMario",
          description: "blah blah blah blah .......",
          views: "2",
          date: "04/05/2021",
          type: "Gaming",
        },
        {
          id: 'v4',
          title: "How to be a super man",
          uploader: "SuperMan",
          description: "blah blah blah blah ....... SuperMan",
          views: "1",
          date: "01/03/2021",
          type: "Song",
        },
      ],
      
    };
  },
  mutations,
  actions,
  getters
};
