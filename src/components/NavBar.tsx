// "use client";
// import { useAppSelector } from "@/lib/hooks";
// import Link from "next/link";
// import { BiBasket } from "react-icons/bi";
// import { FaBookOpen } from "react-icons/fa";

// export const NavBar = () => {
//   const basket = useAppSelector((state) => state.basket)
//   return (
//     <header className="sticky top-0 z-50 flex justify-between items-center bg-[var(--bg-secondary)] border-b border-[var(--border)] px-6 py-4 mb-6 retro-border">
//       <div className="flex items-center gap-2">
//         <FaBookOpen className="text-[var(--accent)] text-3xl animate-pulse" />
//         <span className="text-xl font-bold text-[var(--text-primary)] tracking-tight [data-theme='retro']:font-mono [data-theme='retro']:text-sm">
//           Books store
//         </span>
//       </div>
//       <div className="flex items-center gap-6">
//         <ul className="flex gap-6">
//           <li>
//             <Link href="/">
//               Books
//             </Link>
//           </li>
//           <li>
//           <Link href="/favorite" >
//               Favorite
//             </Link>
//           </li>
//           <li>
//           <Link href="/basket" >
//               <BiBasket/>({basket.length})
//             </Link>
//           </li>

//         </ul>
//       </div>
//     </header>
//   );
// };

"use client";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { BiBasket } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";

export const NavBar = () => {
  const basket = useAppSelector((state) => state.basket);
  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-b border-[var(--border)] px-6 py-4 mb-6 retro-border">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FaBookOpen className="text-[var(--accent)] text-3xl animate-pulse" />
          <span className="text-2xl font-bold tracking-tight [data-theme='retro']:font-mono [data-theme='retro']:text-lg">
            Book Haven
          </span>
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-[var(--accent)] transition">
                Books
              </Link>
            </li>
            <li>
              <Link
                href="/favorite"
                className="hover:text-[var(--accent)] transition"
              >
                Favorite
              </Link>
            </li>
            <li>
              <Link
                href="/basket"
                className="flex items-center gap-1 hover:text-[var(--accent)] transition"
              >
                <BiBasket className="text-xl" />
                <span>({basket.length})</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
