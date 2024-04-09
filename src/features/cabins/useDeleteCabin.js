import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabin";
import toast from "react-hot-toast";
export function useDeleteCabin() {
  const queryClient = useQueryClient();
  //*
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn : deleteCabin
    mutationFn: (id) => deleteCabinApi(id),

    // Once deleting the data then we need to update the UI- or need to update the cache
    onSuccess: () => {
      toast.success("Cabin Successfully Deleted");
      //  remove the data from the cache and next time fresh data will get stored
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    // If error occurs while mutation
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}
