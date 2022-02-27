import React, {useReducer} from 'react';
import Navigator from './src/navigation';
import {BlogContext} from './src/AppContext';

/**
 * blog={id,title,content}
 *
 */

const App = () => {
  const [data, dispatchData] = useReducer(blogReducer, []);

  function blogReducer(blogs, action) {
    switch (action.type) {
      case 'CREATE_BLOG':
        return [...blogs, action.payload.data];
      case 'DELETE_BLOG':
        return blogs.filter(blog => blog.id !== action.payload.id);
      case 'EDIT_BLOG':
        const toBeEditedBlogIndex = blogs.findIndex(
          blogItem => blogItem.id === action.payload.data.id,
        );
        if (toBeEditedBlogIndex !== -1) {
          let newBlogArr = [...blogs];
          newBlogArr[toBeEditedBlogIndex] = action.payload.data;
          return newBlogArr;
        }
        return blogs;
      default:
        return blogs;
    }
  }

  return (
    <BlogContext.Provider value={{data, dispatchData}}>
      <Navigator />
    </BlogContext.Provider>
  );
};

export default App;
