const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  prescription: {
    type: String,
    required: true,
  },
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
  date: {
    type: Date,
    default: Date.now,
  },
  medicineName: {
    type: String,
    required: true,
  },

  medicineDosage: {
    type: String,
    required: true,
  },
  medicineFrequency: {
    type: String,
    required: true,
  },
  medicineDuration: {
    type: String,
    required: true,
  },
  medicineInstructions: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  testRecommended: {
    type: [String],
    required: true,
  },
  notes: {
    type: String,
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

module.exports = mongoose.model("Prescription", prescriptionSchema);
