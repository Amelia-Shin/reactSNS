import { usePostsData } from "@/hooks/queries/use-post-data";
import Fallback from "../fallback";
import Loader from "../loader";
import PostItem from "./post-item";

export default function PostFeed() {
  const { data, error, isPending } = usePostsData();

  if (error) return <Fallback />;
  if (isPending) return <Loader />;

  return (
    <div>
      {data.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
      <div></div>
    </div>
  );
}
