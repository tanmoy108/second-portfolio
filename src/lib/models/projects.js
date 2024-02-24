import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tools: { type: [String] },
  link: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  delete: { type: Boolean, required: true, default: false },
});

const virtual = ProjectSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
ProjectSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const projects =
  mongoose.models.projects || mongoose.model("projects", ProjectSchema);
