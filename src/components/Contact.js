import React from "react";

let Contact = ({ props }) => {
  const { image, location, googleMap, title, date, description } = props;

  return (
    <div className="card">
      <div>
        <img src={image} />
      </div>
      <div  className="just">
        <h5>{location}</h5>
        <h5>{googleMap}</h5>
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Contact;

<div>
  {/* <img src={props.image} />
      {/* CONDITIONAL RENDRING LINE 8 */}
  {/* <h3>Name: {props.name}</h3> */}
  {/* <p>{props.phone}</p>
      <p>{props.email}</p>  */}
</div>;
