import { Inter } from "next/font/google";
import Upgredcheking from "../components/cheking";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function contact() {
  return (
    <main>
      <Header />
      <div >
      <Upgredcheking/>
      </div>
      <Footer />
    </main>
  );
}
