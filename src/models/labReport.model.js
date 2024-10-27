import { Schema, model } from "mongoose";

const labReportSchema = new Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    pathologyLabId: {
      type: Schema.Types.ObjectId,
      ref: "PathologyLab",
      required: true,
    },
    reportType: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    reportFileUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("LabReport", labReportSchema);
