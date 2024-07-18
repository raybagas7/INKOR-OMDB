import agent from "@/libs/agent";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useMovieList = (
  type: string,
  title: string,
  query: ApiSearchParam,
) => {
  const movieList = useInfiniteQuery({
    queryKey: [type, title],
    queryFn: ({ pageParam }) => agent.Movie.listPage(pageParam, query),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return movieList;
};
