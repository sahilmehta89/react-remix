import { Outlet } from "react-router";
import { Link } from "react-router";

export default function BlogLayout() {
  return (
    <>
      <h2>Blog Layout</h2>
      <nav>
        <Link to="/blog">Blog Home</Link>
        <Link to="/blog/101">Example Post</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}