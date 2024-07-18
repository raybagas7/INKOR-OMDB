import React from "react";

import type { Metadata } from "next";

const getMovieDetail = async (id: string): Promise<MovieDetail> => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }
  return response.json();
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  const movieDetail = await getMovieDetail(id);

  console.log(movieDetail);

  return {
    title: `${movieDetail.Title} - ${movieDetail.Year}`,
  };
}

const TitlePage = async ({ params }: { params: { id: string } }) => {
  const movieDetail = await getMovieDetail(params.id);
  console.log(movieDetail);

  return (
    <>
      <main>
        <p style={{ color: "black" }}>{params.id}</p>
      </main>
    </>
  );
};

export default TitlePage;
