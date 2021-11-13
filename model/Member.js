// import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const Member = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dbo: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Member", Member);
