import pkg from "moongoose"
const { Schema, model } =pkg;
const PostCategoriesSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const PostCategories = model("PostCategories", PostCategoriesSchema);
export default PostCategories;
