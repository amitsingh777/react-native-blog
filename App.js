import React, {useReducer} from 'react';
import Navigator from './src/navigation';
import {BlogContext} from './src/AppContext';

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
  const [data, dispatchData] = useReducer(blogReducer, initialState);

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
  console.log(data);
  return (
    <BlogContext.Provider value={{data, dispatchData}}>
      <Navigator />
    </BlogContext.Provider>
  );
};

export default App;
