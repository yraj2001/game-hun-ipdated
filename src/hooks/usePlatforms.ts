import { hashQueryKey, useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platform/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;