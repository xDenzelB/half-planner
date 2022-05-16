import AddEntry from '../components/Planner/AddEntry';
import Entries from '../components/Planner/EntryList';
import { useEntries } from '../context/PlannerContext';
import styles from './Planner.css'

export default function Planner() {
  
  return (
    <main className={styles.main}>
      <AddEntry />
      <Entries entries={entries} />
    </main>
  );
}
