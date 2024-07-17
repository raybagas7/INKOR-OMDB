// import agent from "@/libs/agent";
// import { useInfiniteQuery } from "@tanstack/react-query";

// export const useMovieList = (key: string, query: ApiSearchParam) => {
//   const movieList = useInfiniteQuery({
//     queryKey: ["movies", key],
//     queryFn: ({ pageParam }) => agent.Movie.list(pageParam, query),
//     initialPageParam: 0,
//     getNextPageParam: (lastPage) => lastPage.nextPage,
//   });

//   return movieList;
// };
