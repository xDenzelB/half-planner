// import { useState } from 'react';

// export default function ChangeEntry({ entries, editEntry, deleteEntry }) {
//   const [updateItem, setUpdateItem] = useState(false);

//   let change 
//   if (updateItem) {
//     change = (
//       <>
//         <input type='text' value={entries.title} onChange={(e) => { editEntry({ ...entries, title: e.target.value }) }} />
//         <input type='text' value={entries.content} onChange={(e) => { editEntry({ ...entries, content: e.target.value }) }} />
//         <button type='button' aria-label={`${entries.title}-save`} onClick={() => setUpdateItem(false)}>
//           save
//         </button>
//       </>
//     )
//   } else {
//     change = (
//       <>
//         <p>
//           {entries.title}
//         </p>
//         <p>
//           {entries.content}
//         </p>
//         <button name='update' type='button' onClick={() => setUpdateItem(true)}>
//           Update
//         </button>
//       </>
//     )
//   }


//   return (
//     <div>
//       {change}
//       <button type='text' onClick={() => deleteEntry(entries.id)}>
//         Delete
//       </button>
//     </div>
//   )
// }