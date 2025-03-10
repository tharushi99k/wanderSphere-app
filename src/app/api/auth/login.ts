
// import dbConnect from "@/lib/dbConnect";
// import User from "../../../models/User";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const handler = async (req: { method: string; body: { username: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; token?: string; username?: any; }): void; new(): any; }; }; }) => {
//   if (req.method === "POST") {
//     const { username, password } = req.body;

//     // Connect to DB
//     await dbConnect();

//     try {
//       const user = await User.findOne({ username });

//       if (!user) {
//         return res.status(400).json({ message: "User not found" });
//       }

//       const isMatch = await bcrypt.compare(password, user.password);

//       if (!isMatch) {
//         return res.status(400).json({ message: "Invalid credentials" });
//       }

//       // Generate JWT token
//       const token = jwt.sign(
//         { id: user._id, username: user.username },
//         process.env.JWT_SECRET!,
//         { expiresIn: "1h" }
//       );

//       res.status(200).json({ token, username: user.username });
//     } catch (error) {
//       res.status(500).json({ message: "Server error" });
//     }
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// };

// export default handler;
