import { useQuery } from "@tanstack/react-query";
import getCabins from "../../services/apiCabin";

function useCabin() {
  // Access the data through Tanstack Query
  const {
    isLoading,
    data: cabins,
    isError,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, isError };
}

export default useCabin;
