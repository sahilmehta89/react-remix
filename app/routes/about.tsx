import { Link } from "react-router";
import Hello from "./hello";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/">Go Home</Link>
      <Hello/>
    </>
  );
}