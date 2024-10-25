const mongoose = require("mongoose");

const labReportSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  pathologyLabId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PathologyLab",
    required: true,
  },
  reportType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  reportType: {
    type: String,
    required: true,
  },
  results: {
    type: String,
    required: true,
  },
  reportFileUrl: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
  status: {
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
