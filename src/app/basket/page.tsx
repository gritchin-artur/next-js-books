// "use client";
// import { BooksList } from "@/components/BooksList";
// import { Footer } from "@/components/Footer"
// import { NavBar } from "@/components/NavBar"
// import { Title } from "@/components/Title"
// import { useAppSelector } from "@/lib/hooks";

// export default function Basket () {
//     const basket = useAppSelector((state) => state.basket)
//     const sum = basket.reduce((acc, item) => acc + item.saleInfo.listPrice.amount, 0)
//     console.log(basket)
//     return (
//         <main>
//         <NavBar />
//             <section>
//                 <Title title={basket.length > 0 ? "Your books to buy" : "You don't have any books to buy"} />
//                 <BooksList books={basket} />
//                 {basket.length > 0 && <h3>Sum: {sum} {basket[0].saleInfo.listPrice.currencyCode}</h3>}
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

export default function Basket() {
  const basket = useAppSelector((state) => state.basket);
  const sum = basket.reduce(
    (acc, item) => acc + (item.saleInfo?.listPrice?.amount || 0),
    0,
  );
  const currencyCode =
    basket.length > 0 ? basket[0].saleInfo?.listPrice?.currencyCode || "" : "";

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 max-w-6xl mx-auto p-4">
        <Title
          title={
            basket.length > 0
              ? "Your Books to Buy"
              : "You Don't Have Any Books to Buy"
          }
        />
        <BooksList books={basket} />
        {basket.length > 0 && (
          <h3 className="text-xl font-bold text-right mt-6">
            Total: {sum.toFixed(2)} {currencyCode}
          </h3>
        )}
      </main>
      <Footer />
    </div>
  );
}
