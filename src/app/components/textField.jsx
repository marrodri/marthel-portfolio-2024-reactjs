export default function TextField() {
  return (
    <div>
      <div className="font-bold text-lg">Message</div>
      <textarea
        name=""
        id=""
        placeholder="Please type your message"
        className="w-full h-[300px] text-black rounded-xl px-2 py-2 border-black border-[2px] border-solid"
      ></textarea>
    </div>
  );
}
