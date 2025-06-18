// export const Footer = () => {
//   return (
//     <footer >
//       <p >
//         Designed by
//         <span >
//           Hrytchyn Artur Ⓒ
//         </span>
//       </p>
//       <a
//         href="https://github.com/gritchin-artur"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Visit GitHub →
//       </a>
//     </footer>
//   );
// };

export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          Designed by{" "}
          <span className="font-semibold">
            Hrytchyn Artur Ⓒ {new Date().getFullYear()}
          </span>
        </p>
        <a
          href="https://github.com/gritchin-artur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition"
        >
          Visit GitHub →
        </a>
      </div>
    </footer>
  );
};
