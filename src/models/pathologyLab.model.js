const mongoose = require("mongoose");

const labReportSchema = new mongoose.Schema({
  labName: {
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
  phoneNo: {
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
    required:true,
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
    type: String,
    required: true,
  },
  accreditation: {
    type: String,
    required: true,
  },
  servicesOffered: {
    type: [String],
    required: true,
  },
  timings: {
    type: String,
    required: true,
  },
  passwor: {
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

module.exports = mongoose.model("LabReport", labReportSchema);
