// import dbConnect from "../../../lib/dbConnect";
// import User from "../../../models/User";
// import bcrypt from "bcryptjs";

// const handler = async (req: { method: string; body: { username: any; email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
//   if (req.method === "POST") {
//     const { username, email, password } = req.body;

//     // Connect to DB
//     await dbConnect();

//     try {
//       const existingUser = await User.findOne({ username });

//       if (existingUser) {
//         return res.status(400).json({ message: "Username already taken" });
//       }

//       const hashedPassword = await bcrypt.hash(password, 10);

//       const newUser = new User({
//         username,
//         email,
//         password: hashedPassword,
//       });

//       await newUser.save();

//       res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Server error" });
//     }
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// };

// export default handler;
