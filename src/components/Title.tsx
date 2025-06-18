// type TitleProps = {
//   title: string;
// };

// export const Title = ({ title }: TitleProps) => {
//   return (
//     <h1 >
//       {title}
//       <span></span>
//     </h1>
//   );
// };

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-4xl font-bold text-center my-8 text-[var(--text-primary)] relative">
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[var(--accent)] rounded-full"></span>
    </h1>
  );
};
