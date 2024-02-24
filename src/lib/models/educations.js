import mongoose from "mongoose";

const EducationSchema = mongoose.Schema({
    time: { type: String, required: true},
    location: { type: String, required: true },
    level: { type: String, required: true },
    institute: { type: String, required: true },
});

const virtual = EducationSchema.virtual('id');
virtual.get(function () {
    return this._id;
})
EducationSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
})

export const educations =
  mongoose.models.educations || mongoose.model("educations", EducationSchema);
