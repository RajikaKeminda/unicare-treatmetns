import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeMiddle from "@/components/layout/HomeMiddle";
import HeaderNavigation from "@/components/layout/HeaderNavigation"

export default function Home() {
  return (
    <>
      <HeaderNavigation />
      <Header />
      <HomeMiddle />
      <Footer />
    </>

  );
}
