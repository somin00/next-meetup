import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  { id: 1, title: "meetup1", address: "suwon", image: "/kiyomi.jpeg" },
  { id: 2, title: "meetup2", address: "dong-tan", image: "/kiyomi.jpeg" },
  { id: 3, title: "meetup3", address: "seoul", image: "/kiyomi.jpeg" },
];
export default function Home() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUP} />
    </>
  );
}
