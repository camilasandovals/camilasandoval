import { Image } from "react-bootstrap"

export default function Panel( {name} ) {

  return (
    <Image
      src={`icons/${name}.svg`}
      className="icon"
      style={{display: "inline-block", width: "150px"}} />
  );
}