import Image from "next/image";

///Children: ${Children.JSX}
export default function Wrapper({children}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {children}
    </main>
  );
}
