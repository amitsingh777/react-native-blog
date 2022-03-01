export function blogReducer(blogs, action) {
  switch (action.type) {
    case 'CREATE_BLOG':
      return [...blogs, action.payload];
    case 'GET_BLOG':
      return action.payload;
    case 'DELETE_BLOG':
      return blogs.filter(blog => blog.id !== action.payload.id);
    case 'EDIT_BLOG':
      const toBeEditedBlogIndex = blogs.findIndex(
        blogItem => blogItem.id === action.payload.id,
      );
      if (toBeEditedBlogIndex !== -1) {
        let newBlogArr = [...blogs];
        newBlogArr[toBeEditedBlogIndex] = action.payload;
        return newBlogArr;
      }
      return blogs;
    default:
      return blogs;
  }
}
