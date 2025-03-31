import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  if (!process.env.SECRET_KEY) {
    console.error("SECRET_KEY is not defined in environment variables.");
    return res.status(500).json({ success: false, message: "Internal server error" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", 
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  return res.status(200).json({
    success: true,
    message,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
  });
};
