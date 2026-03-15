import CommentItem from "@/components/comment/comment-item";
import { useCommentsData } from "@/hooks/queries/use-comments-data";
import Fallback from "../fallback";
import Loader from "../loader";
import type { Comment, NestedComment } from "@/types";

function toNestedComments(comments: Comment[]): NestedComment[] {
  const commentMap = new Map<number, NestedComment>();
  const result: NestedComment[] = [];

  comments.forEach((comment) => {
    commentMap.set(comment.id, {
      ...comment,
      children: [],
      parentComment: undefined,
    });
  });

  comments.forEach((comment) => {
    const node = commentMap.get(comment.id);

    if (!node) return;

    // 최상위 댓글 result 배열에 담기
    if (!comment.parent_comment_id) {
      result.push(node);
      return;
    }

    // 자식 댓글 부모 찾기 & 설정 (멘션추가용)
    const parentComment = commentMap.get(comment.parent_comment_id);

    if (!parentComment) return;

    node.parentComment = parentComment;

    // 최상위 댓글 찾아서 children에 대댓글 추가
    const root = commentMap.get(comment.root_comment_id!);
    if (root) {
      root.children.push(node);
    }
  });

  return result;
}

export default function CommentList({ postId }: { postId: number }) {
  const {
    data: comments,
    error: fetchCommentsError,
    isPending: isFetchCommentsPending,
  } = useCommentsData(postId);

  if (fetchCommentsError) return <Fallback />;
  if (isFetchCommentsPending) return <Loader />;

  const nestedComments = toNestedComments(comments);

  return (
    <div className="flex flex-col gap-5">
      {nestedComments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
