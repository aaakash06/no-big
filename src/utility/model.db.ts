import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
      unique: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    interactions: {

type: [{tStamp: Date}],
default: [],

    } ,
  },
  { timestamps: true }
);

export const URL = mongoose.models.URL || mongoose.model("URL", urlSchema);
