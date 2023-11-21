import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { connectToDB } from "../lib/db";

export default function Home({ meetups }) {
  return (
    <>
      <Head>
        <title>전체 일정</title>
        <meta name="description" content="모든 일정을 확인해보세요!" />
      </Head>
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
