import { Form } from "react-router";

export default function Login() {
    return <Form method="post" action="/dashboard">
        <label htmlFor="name">Name:</label>
        <input 
        type="text"
        id="name"
        name="name"
        className="border border-black"></input>
        <br />
        <label htmlFor="email">Email:</label>
        <input
        type="text"
        id="email"
        name="email"
        className="border border-black"></input>
        <br />
        <button type="submit">Submit</button>
    </Form>
}