import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const onAddMeetup = (enteredMeetup) => {
    console.log(enteredMeetup);
    //새 모임 추가 함수
  };
  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}
