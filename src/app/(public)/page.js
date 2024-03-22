import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import SpecialMenuBlock from "@/sections/SpecialMenuBlock";

export default function Home() {
  return (
    <main className={"w-full h-full"}>
      <Header />
      <SpecialMenuBlock />
      <Footer />
    </main>
  );
}
