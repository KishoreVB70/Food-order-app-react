import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>ERRRORRRRR OOpsiieee Dooopsieeee</h1>
            <h2>The STOOPID error is: </h2>
            <h3>{err.data}</h3>
        </div>
    )
}

export default Error;