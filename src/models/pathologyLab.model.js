import { Schema, model } from "mongoose";

const PathologyLabSchema = new Schema(
  {
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
      unique: true,
    },
    labRegistrationDate: {
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
    gstNumber: {
      type: String,
      required: true,
    },
    accreditation: {
      type: String,
      required: true,
    },
    servicesOffered: [
      {
        type: String,
        required: true,
      },
    ],
    timings: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

PathologyLab.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

PathologyLab.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const PathologyLab = mongoose.model("PathologyLab", PathologyLabSchema);