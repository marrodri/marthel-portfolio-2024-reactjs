export default function TextInput({
  label = "label",
  type = "text",
  placeholder = "placeholder",
  onPress = () => {},
}) {
  return (
    <div>
      <div className="font-bold text-lg">{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full text-black py-2 px-2 rounded-xl border-black border-[2px] border-solid rounded-xl"
      />
    </div>
  );
}
