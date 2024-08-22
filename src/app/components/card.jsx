import ImageVideo from "./image";
import Button from "./button";
export default function Card() {
  return (
    <section className="flex flex-col bg-purple-400 h-full border-black border-[2px] border-solid rounded-xl shadow-md">
      <ImageVideo />
      <div className="px-5">
        <div className="font-bold text-lg">SFMLPokedex, November 2024</div>
        <div>
          A school project where I have developed an encyclopedia game where it
          shows information about pokemon.
        </div>
        {/* this should be a button */}
        <Button/>
      </div>
    </section>
  );
}
