import { connect, useDispatch } from "react-redux";
import s from "./PhoneBookForm.module.css";
import actions from "../../redux/actions";
// import reducer from "../../redux/reducer";

const PhoneBookForm = ({
  onSetUserInfo,
  contacts,
  /* onAddContact,*/
  name,
  number,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((el) => el.name === name)) {
      alert(` ${name} is already in contacts!`);
      return;
    }
    dispatch(actions.addContact({ name, number }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} action="">
      <label htmlFor="">
        <p>Name</p>
        <input
          className={s.input}
          onInput={onSetUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor="">
        <p>Number</p>
        <input
          className={s.input}
          onInput={onSetUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.addBtn}>Add contact</button>
    </form>
  );
};

const mapStateToProps = (state, props) => ({
  contacts: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(actions.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookForm);
