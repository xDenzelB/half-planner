import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';


import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry, editEntry, deleteEntry } = useEntries();
  const [updateItem, setUpdateItem] = useState(false);

  let change;

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries]);

  if (updateItem) {
    change = (
      <>
        <form onSubmit={(e) => { e.preventDefault(); setUpdateItem(false); }}>
          <input type='text' name='title' placeholder='Update Title!' value={entry.title} onChange={(e) =>  editEntry({ ...entry, title: e.target.value }) } />
          <input type='text' name='content' placeholder='Update Content!' value={entry.content} onChange={(e) =>  editEntry({ ...entry, content: e.target.value }) } />
          <button type='button'>
          save
          </button>
        </form>
      </>
    )
  } else {
    change = (
      <>
        <button name='update' type='button' onClick={() => setUpdateItem(true)}>
          Update
        </button>
      </>
    )
  }
  // return (
  //   <div>
  //     {change}
  //     <button type='text' onClick={() => deleteEntry(entries.id)}>
  //       Delete
  //     </button>
  //   </div>
  // )

  return (
    <>
      <Link to="/entries" className={styles.backButton}>
        &laquo; Back to Planner
      </Link>
      <article className={styles.entry}>
        <h1>{entry?.title}</h1>
        <p>Due: {entry?.date}</p>
        <p>{entry?.content}</p>
        {change}
        <button type='text' onClick={() => deleteEntry(entry.id)}>
          Delete
        </button>
      </article>
    </>
  );
}
