import { useParams } from "react-router-dom";
import { data_file } from "./AllData";
import ShowDetail from "./ShowDetail";

export default function Useparams() {
  const { id } = useParams(); // <-- proper destructuring
  console.log("URL ID:", id);

  // Find correct item
  const travel = data_file.find((item) => item.id == id);

  // If no data found
  if (!travel) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <ShowDetail imageSrc={travel.imageSrc} name={travel.name} />
    </div>
  );
}
