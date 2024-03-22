import Header from "@/sections/Header";
import SpecialMenuBlock from "@/sections/SpecialMenuBlock";
import Footer from "@/sections/Footer";

const PAGES = [
  {
    title: "LFU Companion",
    link: "/lf-companion",
    image: "/penny-ai.png",
  },
];

export default function Home() {
  return (
    <main className={"grid grid-cols-1 min-h-screen bg-neutral-800"}>
      <Header />
      <SpecialMenuBlock pages={PAGES} />
      <Footer />
    </main>
  );
}
