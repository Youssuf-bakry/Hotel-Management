import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEdit() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    // mutationFn: newCabin=>createCabin(newCabin),
    mutationFn: ({ newCabinData, id }) => createCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New Cabin Successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editCabin, isEditing };
}
