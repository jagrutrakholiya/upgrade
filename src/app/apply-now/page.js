import { Inter } from "next/font/google";
import Apply from "../components/apply";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function contact() {
  return (
    <main>
      {/* <Header /> */}
      <div >
      <Apply/>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
