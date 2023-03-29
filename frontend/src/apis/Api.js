import axios from 'axios';

// const DOMAIN = 'http://localhost:4000';
const DOMAIN = 'http://localhost:3000';
// const express = require("express");
// const DB = require('../../../backend/db');

export const request = async (method, url, data) => {
    return await axios({
          method,
          url : `${DOMAIN}${url}`,
          data
      })
      .then(res => res.data)
      .catch(error => console.log(error));
};
