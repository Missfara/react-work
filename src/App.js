import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
import Contact from "./components/Contact";
import data from "./components/data";

function Ife() {
  let every = data.map((each, idx) => {
    return <Contact key={idx} props={each} />;
  });

  return <div className="all">{every}</div>;
}

export default Ife;

// {
//   /* <Header />
//       <Main />
//       <Footer /> */
// }
// {
//   /* <Contact
//         img = "pic1.jpeg "

//         phone="86689w00"
//         email="faluyi@87.com"
//       />
//       <Contact
//         img="pic2.jpeg"
//         name="adeola "
//         phone="78988765"
//         email="opeyemi@yahoo.com"
//       />
//       <Contact
//         img="pic3.jpeg"
//         name="faluyi demi"
//         phone="904858940"
//         email="adewyui@gmail.com"
//       />
//       <Contact
//         img="pic4.jpeg"
//         name="toby timothy"
//         phone="890--098765"
//         email="yopi@gmail.com"
//       />*/
// }
