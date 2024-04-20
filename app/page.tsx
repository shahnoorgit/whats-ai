import { CustomFilter, Hero, Search } from "@/Components";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" overflow-hidden ">
      <Hero />
      <div className=" mt-12 padding-y max-width padding-x" id="discover">
        <div className=" home__text-container">
          <h1 className=" font-extrabold text-4xl">Car Catalogue</h1>
          <p>Explore Cars Of your Locality</p>
        </div>
      </div>
      <div className="home__filters">
        <Search />
        <div className=" home__filter-container">
          <CustomFilter title="Fuel" />
          <CustomFilter title="Year" />
        </div>
      </div>
    </main>
  );
}
