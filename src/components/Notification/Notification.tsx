import css from "./Notification.module.css";

//Відображає повідомлення "No feedback yet".

export default function Notification() {
  return <p className={css.message}>No feedback yet</p>;
}
