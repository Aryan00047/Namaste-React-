import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>{err?.statusText}, {err?.error?.message}</h1>
        </div>
    )
};

export default Error;