export default function Button({ text = "learn more" }) {
  return (
    <div className="bg-green-400 transition-colors hover:bg-green-100 my-5  w-min py-3 px-5 rounded-xl text-lg font-bold text-nowrap">
      {text}
    </div>
  );
}
