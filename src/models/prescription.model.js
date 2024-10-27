import { Schema, model } from "mongoose";

const prescriptionSchema = new Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    medicineName: [
      {
        type: String,
      },
    ],
    medicineFrequency: {
      type: String,
      required: true,
    },
    medicationDuration: {
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
    testRecommended: [
      {
        type: String,
      },
    ],
    Remarks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Prescription", prescriptionSchema);
