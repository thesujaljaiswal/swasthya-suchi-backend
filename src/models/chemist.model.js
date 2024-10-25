const mongoose = require("mongoose");

const chemistSchema = new mongoose.Schema({
  sotreName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  licenseNumber: {
    type: Number,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  addressLinee1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  gstNumber: {
    type: Number,
    required: true,
  },
  sotreTiming: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chemist", chemistSchema);
