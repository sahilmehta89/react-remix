import { Links, Meta, Outlet, Scripts } from "react-router";
import { Link } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link to="/" style={{ marginRight: 20 }}>Home</Link>
          <Link to="/about" style={{ marginRight: 20 }}>About</Link>
          <Link to="/contact" style={{ marginRight: 20 }}>Contact</Link>
          <Link to="/hello" style={{ marginRight: 20 }}>Hello</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/employees" style={{ marginLeft: 20 }}>Employees</Link>
          <Link to="/usestatehook" style={{ marginLeft: 20 }}>UseState Hook</Link>
          <Link to="/useref" style={{ marginLeft: 20 }}>UseRef Example</Link>
          <Link to="/usememo" style={{ marginLeft: 20 }}>UseMemo Example</Link>
        </nav>

        <div style={{ padding: 20 }}>
          {children}
        </div>

        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}