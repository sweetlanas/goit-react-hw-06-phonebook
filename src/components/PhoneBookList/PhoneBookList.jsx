import { connect } from "react-redux";
import PhoneBookListItem from "../PhoneBookListItem/PhoneBookListItem";
import actions from "../../redux/actions";

const PhoneBookList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem
            onDeleteContact={() => onDeleteContact(id)}
            key={id}
            name={name}
            number={number}
            id={id}
          />
        );
      })}
    </ul>
  );
};

const filterContacts = (contacts, filter) => {
  const normalisedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalisedFilter)
  );
};

const mapStateToProps = ({ items, filter }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookList);
