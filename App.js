import React, {useReducer} from 'react';
import Navigator from './src/navigation';
import {BlogContext} from './src/AppContext';
import {blogReducer} from './src/AppContext/reducer';
import {
  createBlog,
  getBlogs,
  editBlog,
  deleteBlog,
} from './src/AppContext/action';

/**
 * blog={id,title,content}
 *
 */
const initialState = [
  {
    id: 1,
    title: "A winners' Story...",
    content:
      "Hey Guys! I'm Amit Singh. I dreamt of winning in life and achieved it by my sheer will, discipline and determination.",
  },
  {
    id: 2,
    title: "Tag line of a winner's life...",
    content: 'Living, Learning and Leveling up, one day at a time!',
  },
];

const App = () => {
  const [data, dispatch] = useReducer(blogReducer, initialState);

  const boundDispatch = actions => {
    let boundedActionCreators = {};
    for (let actionCreator in actions) {
      boundedActionCreators[actionCreator] = actions[actionCreator](dispatch);
    }
    return boundedActionCreators;
  };

  const boundedActionCreators = boundDispatch({
    createBlog,
    getBlogs,
    editBlog,
    deleteBlog,
  });

  return (
    <BlogContext.Provider
      value={{data, dispatchData: dispatch, ...boundedActionCreators}}>
      <Navigator />
    </BlogContext.Provider>
  );
};

export default App;
