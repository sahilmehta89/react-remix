import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";

type Employee = {
  id: number;
  name: string;
  department: string;
};

// Fake DB
const employees: Employee[] = [
  { id: 1, name: "Amit Sharma", department: "IT" },
  { id: 2, name: "Rohan Verma", department: "HR" },
  { id: 3, name: "Sneha Khan", department: "Finance" },
];

// Loader
export async function loader({ params }: LoaderFunctionArgs) {
  const id = Number(params.id);

  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    throw new Response("Employee Not Found", { status: 404 });
  }

  return employee;
}

export default function EmployeeDetails() {
  const employee = useLoaderData() as Employee;

  return (
    <div style={{ padding: 20 }}>
      <h1>Employee Details</h1>
      <p><b>ID:</b> {employee.id}</p>
      <p><b>Name:</b> {employee.name}</p>
      <p><b>Department:</b> {employee.department}</p>
    </div>
  );
}
