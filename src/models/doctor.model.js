import { Schema, model } from "mongoose";

const doctorSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: number,
      required: true,
    },
    specialization: [
      {
        type: String,
        required: true,
      },
    ],
    qualification: [
      {
        type: String,
        required: true,
      },
    ],
    experience: {
      type: Number,
      required: true,
    },
    licenseNo: {
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
  },
  {
    timestamps: true,
  }
);

export default model("Doctor", doctorSchema);
