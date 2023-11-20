import MeetupDetail from "../components/meetups/MeetupDetail";

export default function MeetupDetailPage() {
  return (
    <MeetupDetail
      image={"/kiyomi.jpeg"}
      title={"First Meetup"}
      address={"suwon"}
      description={"the meetup description"}
    />
  );
}
