import { deleteImages } from "@/api/image";
import { deletePost } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import type { useMutationCallback } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeletePost(callbacks?: useMutationCallback) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: async (deletedPost) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      const imageUrls = deletedPost.image_urls ?? [];
      if (imageUrls.length) {
        const paths = imageUrls.map((url) => url.split("/uploads/")[1]);
        await deleteImages(paths);
      }

      queryClient.resetQueries({ queryKey: QUERY_KEYS.post.list });
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
