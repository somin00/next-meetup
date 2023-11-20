import Image from "next/image";
import styles from "./MeetupDetail.module.css";

export default function MeetupDetail(props) {
  const { image, title, address, description } = props;
  return (
    <section className={styles.detail}>
      <Image src={image} alt={title} width={600} height={400} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
