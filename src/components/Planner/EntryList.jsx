import Entry from './EntryItem';
import styles from './EntryList.css';
import { useEntries } from '../../context/PlannerContext';

export default function Entries() {
  // TODO: Replace with the entries stored in PlannerContext
  const { entries } = useEntries();
  // const entries = [
  //   {
  //     id: 0,
  //     title: 'Replace me!',
  //     content: '`content` should only be visible on the detail view',
  //     date: new Date()
  //   },
  // ];

  return (
    <ul className={styles.list}>
      {entries.map(({ id, title, date }) => (
        <Entry key={id} id={id} title={title} date={date} />
      ))}
    </ul>
  );
}
