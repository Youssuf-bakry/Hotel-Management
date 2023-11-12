import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteMutation } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteMutation(id),
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
