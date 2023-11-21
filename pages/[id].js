import { ObjectId } from "mongodb";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { connectToDB } from "../lib/db";
import Head from "next/head";

export default function MeetupDetailPage({ meetup }) {
  const { image, title, address, description } = meetup;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail image={image} title={title} address={address} description={description} />
    </>
  );
}

export const getStaticPaths = async () => {
  const client = await connectToDB();
  const meetups = await client.db().collection("meetups").find({}, { _id: 1 }).toArray();

  client.close();
  return {
    paths: meetups.map((meetup) => ({
      params: {
        id: meetup._id.toString(),
      },
    })),
    fallback: "blocking",
  };
};
export const getStaticProps = async (context) => {
  const meetupId = context.params.id;
  const client = await connectToDB();
  const selectedMeetup = await client
    .db()
    .collection("meetups")
    .findOne({ _id: new ObjectId(meetupId) });

  client.close();

  const meetup = {
    id: selectedMeetup._id.toString(),
    image: "/kiyomi.jpeg",
    title: selectedMeetup.title,
    address: selectedMeetup.address,
    description: selectedMeetup.description,
  };

  return {
    props: {
      meetup,
    },
  };
};
