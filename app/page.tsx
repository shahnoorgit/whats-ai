import { CarCard, CustomFilter, Hero, Search } from "@/Components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars();
  const isCars = !Array.isArray(allCars) || allCars.length === 0 || !allCars;
  return (
    <main className=" overflow-hidden ">
      <Hero />
      <div className=" mt-12 padding-y max-width padding-x" id="discover">
        <div className=" home__text-container">
          <h1 className=" font-extrabold text-4xl">Car Catalogue</h1>
          <p>Explore Cars Of your Locality</p>
        </div>

        <div className="home__filters">
          <Search />
          <div className=" home__filter-container">
            <CustomFilter title="Fuel" />
            <CustomFilter title="Year" />
          </div>
        </div>
        {!isCars ? (
          <section>
            {" "}
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className=" home__error-container">
            <h2 className="text-black text-xl font-bold">oops , No results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
