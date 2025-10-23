import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="flex flex-wrap shadow-lg justify-around p-4 bg-gray-200 mt-4 fixed bottom-0 w-full">
            <h3>Copywright</h3>
            <h3>Social Media</h3>
            <h3>{loggedInUser}</h3>
        </div>
    )
}

export default Footer;