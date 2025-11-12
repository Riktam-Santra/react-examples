import { useActionData } from "react-router";

export default function Dashboard() {
    const formData = useActionData();
 
    return <div>
        <h1>{formData.name}</h1>
        <h3>{formData.email}</h3>
    </div>
}