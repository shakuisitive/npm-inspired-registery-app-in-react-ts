import { useLoaderData } from "react-router-dom";

export const DetailsPage = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>DetailsPage</div>;
};
