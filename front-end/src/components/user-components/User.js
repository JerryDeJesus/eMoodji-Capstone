import { Link } from "react-router-dom";

export default function User({user}){
    let { fname, lname, email, password, id } = user;

    return(
        <article className="User">
            <Link to={`/users/${id}`}>
                <div>
                    <h3>User ID: {id}</h3>
                    <h3>First name: {fname}</h3>
                    <h3>Last name: {lname}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Password: {password}</h3>
                </div>
            </Link>

        </article>
    )
}