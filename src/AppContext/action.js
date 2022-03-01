import customAxios from '../api/jsonServer';

export const createBlog = dispatch => {
  return async post => {
    const response = await customAxios.post('/blogPosts', {
      title: post.title,
      content: post.content,
    });

    dispatch({
      type: 'CREATE_BLOG',
      payload: {...response.data},
    });
  };
};

export const getBlogs = dispatch => {
  return async () => {
    const response = await customAxios.get('/blogPosts');

    dispatch({
      type: 'GET_BLOG',
      payload: response.data,
    });
  };
};

export const editBlog = dispatch => {
  return async post => {
    try {
      const response = await customAxios.put(`/blogPosts/${post.id}`, {
        ...post,
      });

      dispatch({
        type: 'EDIT_BLOG',
        payload: {
          ...post,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteBlog = dispatch => {
  return async blogId => {
    await customAxios.delete(`/blogPosts/${blogId}`);
    dispatch({
      type: 'DELETE_BLOG',
      payload: {
        id: blogId,
      },
    });
  };
};
