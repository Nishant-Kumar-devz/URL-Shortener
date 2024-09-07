const mongooes = require("mongoose");

const urlSchema = mongooes.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    analytics: [{ timestamp: { type: Number } }],
  },
  {
    timestamps: true,
  }
);

const urlModel = mongooes.model("short-urls", urlSchema);

module.exports = urlModel;
