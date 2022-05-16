import { Link } from "react-router-dom";

export default function User({user}){
    let { fname, lname, email, password, uid } = user;

    return(
        <article className="User">
            <Link to={`/users/${uid}`}>
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