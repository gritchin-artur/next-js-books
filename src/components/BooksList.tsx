// "use client";
// import { Book } from "@/types/book";
// import { BookComponent } from "./BookComponent";

// type BooksProp = {
//   books: Book[],
// }

// export const BooksList = ({books}: BooksProp) => {

//   return (
//     <ul className="space-y-6 max-w-4xl mx-auto p-4">
//       {books.map((book) => (
//         <BookComponent key={book.id} book={book} />
//       ))}
//     </ul>
//   );
// };

"use client";
import { Book } from "@/types/book";
import { BookComponent } from "./BookComponent";

type BooksProp = {
  books: Book[];
};

export const BooksList = ({ books }: BooksProp) => {
  return (
    <ul className="max-w-6xl mx-auto p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
      {books.map((book) => (
        <BookComponent key={book.id} book={book} />
      ))}
    </ul>
  );
};
