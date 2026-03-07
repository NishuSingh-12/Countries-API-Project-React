import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return <h1 className="error-msg">Page not found...{error.status}</h1>;
}
