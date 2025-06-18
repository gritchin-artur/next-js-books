// "use client";
// import Image from "next/image";
// import type { Book } from "../types/book";
// import { BsBasket } from "react-icons/bs";
// import { SlStar } from "react-icons/sl";
// import { addToBasket, removeFromBasket } from "@/lib/features/basketSlice";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import {
//   addToFavorite,
//   removeFromFavorite,
// } from "@/lib/features/favoriteSlice";
// import { usePathname } from "next/navigation";

// type BookProp = {
//   book: Book;
// };

// export const BookComponent = ({ book }: BookProp) => {
//   const dispatch = useAppDispatch();
//   const favorite = useAppSelector((state) => state.favorite);
//   const basket = useAppSelector((state) => state.basket);
//   const pathname = usePathname();
//   console.log(pathname);
//   const {
//     title,
//     subtitle,
//     publisher,
//     publishedDate,
//     description,
//     pageCount,
//     imageLinks,
//     language,
//   } = book.volumeInfo;

//   const thumbnail = imageLinks?.thumbnail;

//   const isFavoriteExist = favorite.find((fav) => fav.id === book.id);
//   const isBasketExist = basket.find((b) => b.id === book.id);

//   const handleToBasket = () => {
//     if (isBasketExist) {
//       dispatch(removeFromBasket(book.id));
//     } else {
//       dispatch(addToBasket(book));
//     }
//   };

//   const handleToFavorite = () => {
//     if (isFavoriteExist) {
//       dispatch(removeFromFavorite(book.id));
//     } else {
//       dispatch(addToFavorite(book));
//     }
//   };

//   return (
//     <li>
//       <Image
//         src={
//           thumbnail
//             ? thumbnail
//             : "data:image/jpeg;base64,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"
//         }
//         alt={title}
//         width={128}
//         height={192}
//         style={{ width: "auto", height: "auto" }}
//       />
//       <div>
//         <h3>{title}</h3>
//         {subtitle && <h4>{subtitle}</h4>}
//         <div>
//           {publisher && (
//             <p>
//               <strong>Publisher:</strong> {publisher}
//             </p>
//           )}
//           {publishedDate && (
//             <p>
//               <strong>Published:</strong> {publishedDate}
//             </p>
//           )}
//           <p>
//             <strong>Pages:</strong> {pageCount}
//           </p>
//           <p>
//             <strong>Language:</strong> {language.toUpperCase()}
//           </p>
// {   book.saleInfo.listPrice &&  <p>
//             <strong>Price: {book.saleInfo.listPrice.amount} <span>{book.saleInfo.listPrice.currencyCode}</span></strong>
//           </p>}
//         </div>
//         {description && <p>{description}</p>}
//       </div>
//       <div className="flex">
//         {isBasketExist && pathname === "/" ? (
//           <h4>This book was added</h4>
//         ) : (
//           <button className="flex gap-2" onClick={handleToBasket}>
//             {pathname === "/basket" ? "Remove from" : "Add to"} basket <BsBasket />
//           </button>
//         )}
//         <button className="flex gap-2" onClick={handleToFavorite}>
//           {isFavoriteExist ? "Remove from" : "Add to"} favorite <SlStar />
//         </button>
//       </div>
//     </li>
//   );
// };

"use client";
import Image from "next/image";
import type { Book } from "../types/book";
import { BsBasket } from "react-icons/bs";
import { SlStar } from "react-icons/sl";
import { addToBasket, removeFromBasket } from "@/lib/features/basketSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addToFavorite,
  removeFromFavorite,
} from "@/lib/features/favoriteSlice";
import { usePathname } from "next/navigation";

type BookProp = {
  book: Book;
};

export const BookComponent = ({ book }: BookProp) => {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector((state) => state.favorite);
  const basket = useAppSelector((state) => state.basket);
  const pathname = usePathname();
  const {
    title,
    subtitle,
    publisher,
    publishedDate,
    description,
    pageCount,
    imageLinks,
    language,
  } = book.volumeInfo;

  const thumbnail = imageLinks?.thumbnail;

  const isFavoriteExist = favorite.find((fav) => fav.id === book.id);
  const isBasketExist = basket.find((b) => b.id === book.id);

  const handleToBasket = () => {
    if (isBasketExist) {
      dispatch(removeFromBasket(book.id));
    } else {
      dispatch(addToBasket(book));
    }
  };

  const handleToFavorite = () => {
    if (isFavoriteExist) {
      dispatch(removeFromFavorite(book.id));
    } else {
      dispatch(addToFavorite(book));
    }
  };

  return (
    <li className="card grid content-between flex-col sm:flex-row gap-4">
      <div className="flex justify-center w-full">
        <Image
          src={
            thumbnail
              ? thumbnail
              : "data:image/jpeg;base64,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"
          }
          alt={title}
          width={128}
          height={192}
          className="rounded-lg object-cover h-auto"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        {subtitle && <h4 className="text-lg text-gray-600">{subtitle}</h4>}
        <div className="mt-2 space-y-1 text-sm">
          {publisher && (
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
          )}
          {publishedDate && (
            <p>
              <strong>Published:</strong> {publishedDate}
            </p>
          )}
          <p>
            <strong>Pages:</strong> {pageCount}
          </p>
          <p>
            <strong>Language:</strong> {language.toUpperCase()}
          </p>
          {book.saleInfo?.listPrice && (
            <p>
              <strong>Price:</strong> {book.saleInfo.listPrice.amount}{" "}
              <span>{book.saleInfo.listPrice.currencyCode}</span>
            </p>
          )}
        </div>
        {description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {isBasketExist && pathname === "/" ? (
          <h4 className="text-sm text-green-600 font-semibold">
            This book was added
          </h4>
        ) : (
          <button
            className="btn-primary flex items-center gap-2"
            onClick={handleToBasket}
          >
            {pathname === "/basket" ? "Remove from" : "Add to"} basket{" "}
            <BsBasket />
          </button>
        )}
        <button
          className={`btn-primary flex items-center gap-2 ${isFavoriteExist ? "bg-red-500 hover:bg-red-600" : ""}`}
          onClick={handleToFavorite}
        >
          {isFavoriteExist ? "Remove from" : "Add to"} favorite{" "}
          <SlStar
            className={isFavoriteExist && "bg-yellow-400 p-1 rounded-full"}
          />
        </button>
      </div>
    </li>
  );
};
