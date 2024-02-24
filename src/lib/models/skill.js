import mongoose from "mongoose";

const SkillSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  imageUrl: { type: String, required: true },
  type: { type: String, required: true },
});

const virtual = SkillSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
SkillSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const skills =
  mongoose.models.skills || mongoose.model("skills", SkillSchema);
