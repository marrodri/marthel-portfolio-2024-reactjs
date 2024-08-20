export default function Spotlight({ children, color }) {
  console.log("spotlight" + color);
  return <div className={`${color} px-5 py-10 w-full flex flex-col justify-center`}>{children}</div>;
}
