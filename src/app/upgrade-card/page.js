import { Inter } from "next/font/google";
import Dashboard from "../components/dashboard";
import UpgradeCard from "../components/upgradeCard";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function contact() {
  return (
    <main>
      <Header />
      <div >
        <UpgradeCard />
      </div>
      <Footer />
    </main>
  );
}
