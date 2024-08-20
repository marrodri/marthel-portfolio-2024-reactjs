import Wrapper from "@/app/layout/wrapper";
import Header from "@/app/layout/header";
import Footer from "./layout/footer";
export default function Home() {
  return (
    <div className="bg-red-400">
      <Header />
      <Wrapper />
      <Footer/>
    </div>
  );
}
