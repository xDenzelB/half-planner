import { Link } from 'react-router-dom';
import styles from './EntryItem.css';
import ChangeEntry from './ChangeEntry';

export default function Entry({ id, title, date, entries, editEntry, deleteEntry }) {
  const relativeDays = (new Date(date) - new Date()) / (1000 * 60 * 60 * 24);
  const relativeDate = new Intl.RelativeTimeFormat('en').format(
    Math.ceil(relativeDays),
    'days'
  );

  return (
    <Link to={`/entries/${id}`}>
      <li>
        {title} <span className={styles.date}>{relativeDate}</span>
        <ChangeEntry entries={entries} editEntry={editEntry} deleteEntry={deleteEntry} />
      </li>
    </Link>
  );
}
