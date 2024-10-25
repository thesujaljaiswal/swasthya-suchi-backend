const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  addressLine1: {
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
    type: String,
    required: true,
  },
  
  aadharCardNo: {
    type: Number,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateofBirth: {
    type: Date,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  allergy: {
    type:  [String],
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

module.exports = mongoose.model("Patient", patientSchema);
