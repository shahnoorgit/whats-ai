import { Hero } from "@/Components";
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
    </main>
  );
}
