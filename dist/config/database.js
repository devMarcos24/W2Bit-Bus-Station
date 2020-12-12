"use strict";

var dotenv = require("dotenv").config;

module.exports = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT,
  define: {
    timestamps: true
  } // host: "localhost",
  // username: "postgres",
  // password: "docker",
  // database: "w2bi",
  // dialect: "postgres",
  // define: {
  //   timestamps: true,
  // },

};