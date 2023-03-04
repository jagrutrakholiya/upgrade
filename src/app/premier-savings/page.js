import { Inter } from "next/font/google";
import Premiersavings from "../components/saving";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function contact() {
  return (
    <main>
      <Header />
      <div >
        <Premiersavings/>
      </div>
      <Footer />
    </main>
  );
}
