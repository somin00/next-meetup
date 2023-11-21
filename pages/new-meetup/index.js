import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NewMeetup() {
  const router = useRouter();
  const onAddMeetup = async (enteredMeetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "새 글 등록에 실패했습니다.");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>새 일정 등록</title>
        <meta name="description" content="새 일정을 등록해보세요!" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
