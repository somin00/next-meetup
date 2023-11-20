import MeetupList from "../components/meetups/MeetupList";
import { connectToDB } from "../lib/db";

export default function Home({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

export const getStaticProps = async () => {
  const client = await connectToDB();
  const meetups = await client.db().collection("meetups").find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: "/kiyomi.jpeg",
        id: meetup._id.toString(),
      })),
    },
  };
};
