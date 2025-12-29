import { useParams } from "react-router";

export default function BlogPost() {
  const { postId } = useParams();
  return <h1>Blog Post ID: {postId}</h1>;
}

