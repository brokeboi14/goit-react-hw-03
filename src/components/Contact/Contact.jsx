import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import css from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>
          <IoIosContact />
          {name}
        </p>
        <p className={css.contactText}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button
        className={css.contactDeleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;