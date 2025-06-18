// "use client";
// import { BooksList } from "@/components/BooksList";
// import { Footer } from "@/components/Footer"
// import { NavBar } from "@/components/NavBar"
// import { Title } from "@/components/Title"
// import { useAppSelector } from "@/lib/hooks";

// export default function Favorite () {
//     const favorite = useAppSelector((state) => state.favorite)
//     return (
//         <main>
//         <NavBar />
//             <section>
//                 <Title title={favorite.length > 0 ? "Your Favorite" : "You don't have any books"} />
//                 <BooksList books={favorite} />
//             </section>
//             <Footer/>
//     </main>
//     )
// }

"use client";
import { BooksList } from "@/components/BooksList";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Title } from "@/components/Title";
import { useAppSelector } from "@/lib/hooks";

export default function Favorite() {
  const favorite = useAppSelector((state) => state.favorite);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 max-w-6xl mx-auto p-4">
        <Title
          title={
            favorite.length > 0
              ? "Your Favorites"
              : "You Don't Have Any Favorite Books"
          }
        />
        <BooksList books={favorite} />
      </main>
      <Footer />
    </div>
  );
}
