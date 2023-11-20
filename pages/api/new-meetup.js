import { connectToDB } from "../../lib/db";

export default async function createMeetup(req, res) {
  if (req.method !== "POST") return;

  const { title, image, address, description } = req.body;

  const newMeetup = {
    title,
    image,
    address,
    description,
  };

  const client = await connectToDB();

  try {
    const result = await client.db().collection("meetups").insertOne(newMeetup);
    newMeetup.id = result.insertedId;
  } catch (e) {
    res.status(500).json({
      message: "데이터 저장 실패",
    });
    client.close();
    return;
  }

  client.close();

  res.status(201).json({
    message: "약속 저장 완료",
    data: newMeetup,
  });
}
