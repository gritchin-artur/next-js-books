// "use client";
// import { BooksList } from "@/components/BooksList";
// import { Footer } from "@/components/Footer";
// import { Form } from "@/components/Form";
// import { NavBar } from "@/components/NavBar"
// import { Title } from "@/components/Title";
// import { fetchBooks } from "@/lib/features/booksSlice";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import { useEffect } from "react";

// export default function Home() {
//   const dispatch = useAppDispatch();
//   const { books } = useAppSelector((state) => state.books);

//   useEffect(() => {
//     dispatch(fetchBooks("book"));
//   }, [dispatch]);
//   return (
//     <>
// <NavBar/>
//       <main >
//         <Title title="Find your book"/>
//         <Form />
//         <BooksList books={books}/>
//       </main>
// <Footer/>
//     </>
//   );
// }

"use client";
import { BooksList } from "@/components/BooksList";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { NavBar } from "@/components/NavBar";
import { Title } from "@/components/Title";
import { fetchBooks } from "@/lib/features/booksSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks("book"));
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Title title="Find Your Book" />
        <Form />
        <BooksList books={books} />
      </main>
      <Footer />
    </div>
  );
}
