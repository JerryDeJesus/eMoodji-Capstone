import { Link } from "react-router-dom";

export default function User({users}){
    let { fname, lname, email, password, uid } = users;

    return(
        <article className="User">
            <Link >
                <div>
                    <h3>First name: {fname}</h3>
                    <h3>Last name: {lname}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Password: {password}</h3>
                    <h3>User ID: {uid}</h3>
                </div>
            </Link>

        </article>
    )
}