import { Link, useLoaderData } from "react-router";

type Employee = { id: number; name: string; department: string };

// 1️⃣ Create loader
export const loader = async () => {
  const employees: Employee[] = [
    { id: 1, name: "Amit Sharma", department: "IT" },
    { id: 2, name: "Rohan Verma", department: "HR" },
    { id: 3, name: "Sneha Khan", department: "Finance" },
  ];

  return employees;
};


export default function Employees() {
  const employees = useLoaderData() as Employee[];
  return (
    <div style={{ padding: 20 }}>
      <h1>Employees List</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} — {emp.department} — <Link to={`/employees/${emp.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
