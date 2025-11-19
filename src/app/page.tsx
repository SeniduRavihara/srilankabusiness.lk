import Navbar from "@/components/home/navbar";
import TopBanner from "@/components/home/top-banner";

export default function HomePage() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50">
        <TopBanner />
        <div className="fixed top-7 left-0 w-screen pr-4">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
