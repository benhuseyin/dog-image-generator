"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { Loader } from "lucide-react";

export default function Home() {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateDogImage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);

      if (!response.ok) {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
      }
    } catch (error) {
      console.error("Error fetching dog image:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const dogName = dogImage?.split("/")[4];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold flex flex-col text-center animate-fade-in">
          Welcome to the
          <span className="text-primary">Dog Image Generator APP</span>
        </h1>
        <button
          className="bg-primary text-white px-4 py-2 rounded-md h-12 mx-auto cursor-pointer min-w-[183px] animate-fade-in"
          onClick={handleGenerateDogImage}
        >
          {isLoading ? (
            <div className="flex items-center justify-center w-full">
              <Loader className="animate-spin" />
            </div>
          ) : (
            "Generate Dog Image"
          )}
        </button>

        <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] space-y-5">
          {dogImage && (
            <Fragment>
              <Image
                src={dogImage}
                alt="Dog"
                width={500}
                height={500}
                className="mx-auto rounded-4xl w-full h-full object-cover object-center animate-fade-in-up"
              />
              <p
                style={{ fontFamily: "Lobster, cursive" }}
                className="text-center text-2xl text-accent font-extrabold animate-fade-in-up"
              >
                {dogName?.toUpperCase()}
              </p>
            </Fragment>
          )}
        </div>
      </main>
    </div>
  );
}
