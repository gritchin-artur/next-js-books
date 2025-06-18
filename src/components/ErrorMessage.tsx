// type Message = {
//   message: string;
// };

// export const ErrorMessage: React.FC<Message> = ({ message }) => {
//   return (
//     <div
//       className="flex items-center justify-center gap-3 p-4 bg-[var(--error-bg)] border border-[var(--error-border)] rounded-lg max-w-md mx-auto my-10 text-[var(--error-text)] retro-border"
//       role="alert"
//     >
//       <svg
//         className="w-6 h-6 animate-pulse"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//         />
//       </svg>
//       <span className="text-lg [data-theme='retro']:text-sm">{message}</span>
//     </div>
//   );
// };

type Message = {
  message: string;
};

export const ErrorMessage = ({ message }: Message) => {
  return (
    <div
      className="flex items-center justify-center gap-3 p-4 bg-[var(--error-bg)] border border-[var(--error-border)] rounded-lg max-w-md mx-auto my-10 text-[var(--error-text)] retro-border animate-fade-in"
      role="alert"
    >
      <svg
        className="w-6 h-6 animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-lg [data-theme='retro']:text-sm">{message}</span>
    </div>
  );
};
