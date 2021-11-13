// import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const Information = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  peso: {
    type: String,
    required: true,
  },
  pulso: {
    type: String,
    required: true,
  },
  SIS: {
    type: String,
    required: true,
  },
  DIA: {
    type: String,
    required: true,
  },
  member_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Member",
  },
});
module.exports = mongoose.model("Information", Information);
