import { initMongoose } from "@/lib/mongoose";
import User from "@/models/User";

export default async function handler(req, res) {
  await initMongoose();

  if (req.method === "GET") {
    const id = req.query.id;
    const user = await User.findById(id);
    res.json({ user });
  }

  if (req.method === "PUT") {
    //Get the logged in user id

    const username = req.body;
    res.json({ username });
  }
}
