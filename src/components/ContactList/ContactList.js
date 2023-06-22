import PropTypes from 'prop-types'; // ES6
import css from './ContacList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDelete(id)}
            className={css.button__delete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
