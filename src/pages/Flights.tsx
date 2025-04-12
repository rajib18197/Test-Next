import { useParams } from "react-router";
import FlightList from "../features/flight/FlightList";

export default function Flights() {
  const { tripType } = useParams();
  console.log(tripType);
  return (
    <div>
      <FlightList />
    </div>
  );
}
