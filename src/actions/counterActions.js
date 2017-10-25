import axios from 'axios';
import config from '../config';
import { GET_COUNTERS } from '../constants/actionTypes';

export const addCounter = title => (dispatch) => {
  axios
    .post(`${config.counterApiHost}/api/${config.apiVersion}/counter`, {
      title
    })
    .then((response) => {
      dispatch({
        type: GET_COUNTERS,
        counters: response.data
      });
    });
};

export const getCounters = () => (dispatch) => {
  axios
    .get(`${config.counterApiHost}/api/${config.apiVersion}/counters`)
    .then((response) => {
      dispatch({
        type: GET_COUNTERS,
        counters: response.data
      });
    });
};

export const incrementCounter = id => (dispatch) => {
  axios
    .post(`${config.counterApiHost}/api/${config.apiVersion}/counter/inc`, {
      id
    })
    .then((response) => {
      dispatch({
        type: GET_COUNTERS,
        counters: response.data
      });
    });
};

export const decrementCounter = id => (dispatch) => {
  axios
    .post(`${config.counterApiHost}/api/${config.apiVersion}/counter/dec`, {
      id
    })
    .then((response) => {
      dispatch({
        type: GET_COUNTERS,
        counters: response.data
      });
    });
};

export const deleteCounter = id => (dispatch) => {
  axios({
    method: 'delete',
    url: `${config.counterApiHost}/api/${config.apiVersion}/counter`,
    data: { id }
  })
    .then((response) => {
      dispatch({
        type: GET_COUNTERS,
        counters: response.data
      });
    });
};
