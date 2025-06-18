// "use client";
// import { fetchBooks } from "@/lib/features/booksSlice";
// import { useAppDispatch } from "@/lib/hooks";
// import { useState } from "react";

// export const Form = () => {
//   const [value, setValue] = useState<string>("");
//   const dispatch = useAppDispatch();

//   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (value.trim()) {
//       dispatch(fetchBooks(value));
//       setValue("");
//     }
//   };

//   return (
//     <div >
//       <input
//         type="text"
//         placeholder="Search books..."
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button
//         type="submit"
//         onClick={handleSubmit}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

"use client";
import { fetchBooks } from "@/lib/features/booksSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch(fetchBooks(value));
      setValue("");
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 flex gap-4 animate-fade-in">
      <input
        type="text"
        placeholder="Search books..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-[var(--text-primary)] bg-white"
      />
      <button type="submit" onClick={handleSubmit} className="btn-primary">
        Search
      </button>
    </div>
  );
};
