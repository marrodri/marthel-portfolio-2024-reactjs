export default function Spotlight({ children, color }) {
  console.log("spotlight" + color);
  return <div className={`${color} px-5 py-20 w-full`}>{children}</div>;
}
