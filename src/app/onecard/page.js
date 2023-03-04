import { Inter } from "next/font/google";
import Onecard from "../components/onecard";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function contact() {
  return (
    <main>
      <Header />
      <div >
        <Onecard/>
      </div>
      <Footer />
    </main>
  );
}
