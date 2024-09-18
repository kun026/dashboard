import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  expiredDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ["free", "invalid", "on hold"],
    required: true,
  },
  status: {
    type: String,
    enum: ["belum lunas", "lunas"],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
