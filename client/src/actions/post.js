import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POSTS,
  ADD_POSTS,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

//Get Posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Like

export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//REmove Like

export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Post

export const deletePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: DELETE_POSTS,
      payload: id,
    });

    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//add Post

export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`/api/posts/`, formData, config);

    dispatch({
      type: ADD_POSTS,
      payload: res.data,
    });

    dispatch(setAlert("Post Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get Post

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//add Comment

export const addComment = (postId, formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `/api/posts/comment/${postId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//delete Comment

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert("Comment Remove", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
