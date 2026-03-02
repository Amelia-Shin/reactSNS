import { deleteImages } from "@/api/image";
import { deletePost } from "@/api/post";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useDeletePost(callbacks?: useMutationCallback) {
  return useMutation({
    mutationFn: deletePost,
    onSuccess: async (deletedPost) => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      const imageUrls = deletedPost.image_urls ?? [];
      if (imageUrls.length) {
        const paths = imageUrls.map((url) => url.split("/uploads/")[1]);
        await deleteImages(paths);
      }
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
