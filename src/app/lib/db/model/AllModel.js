import mongoose from "mongoose";

// Define schemas
const CategorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  link: { type: String, unique: true, required: true },
  news_list: [{ type: mongoose.Schema.Types.ObjectId, ref: "NewsList" }],
}, { timestamps: true });

const NewsListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  short_des: { type: String, required: true },
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  keywords: String,
  long_des: String,
  type: String,
  catID: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  mobile: String,
  password: { type: String, required: true },
  otp: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
}, { timestamps: true });

const CommentSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  postID: { type: mongoose.Schema.Types.ObjectId, ref: "NewsList", required: true },
  descriptions: { type: String, required: true },
}, { timestamps: true });

const SocialSchema = new mongoose.Schema({
  facebook: String,
  youtube: String,
  twitter: String,
  linkedin: String,
  about: String,
  address: String,
}, { timestamps: true });

const SubscriberSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
}, { timestamps: true });

const PolicySchema = new mongoose.Schema({
  long_des: { type: String, required: true },
  type: { type: String, required: true },
});

// Prevent OverwriteModelError
const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);
const NewsList = mongoose.models.NewsList || mongoose.model("NewsList", NewsListSchema);
const User = mongoose.models.User || mongoose.model("User", UserSchema);
const Comment = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
const Social = mongoose.models.Social || mongoose.model("Social", SocialSchema);
const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);
const Policy = mongoose.models.Policy || mongoose.model("Policy", PolicySchema);

export { Category, NewsList, User, Comment, Social, Subscriber, Policy };
