// export const Loader: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-[var(--bg-primary)]">
//       <div className="relative w-20 h-20">
//         <div className="absolute w-20 h-20 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
//         <div className="absolute w-16 h-16 border-4 border-[var(--accent-hover)] border-t-transparent rounded-full "></div>
//       </div>
//     </div>
//   );
// };

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[var(--bg-primary)]">
      <div className="relative w-20 h-20">
        <div className="absolute w-20 h-20 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-4 border-[var(--accent-hover)] border-t-transparent rounded-full animate-spin reverse"></div>
        <div className="absolute inset-0 flex items-center justify-center text-[var(--accent)] font-bold">
          Loading
        </div>
      </div>
    </div>
  );
};
