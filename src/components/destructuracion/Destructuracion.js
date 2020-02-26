// import React from "react";

const user1 = {
  name: "Milvia Alvarez",
  username: "1000VIA",
  country: "Colombia",
  social: {
    facebook: "https://www.facebook.com/MilviaAlvarez11",
    twiter: "https://twitter.com/MilviaAlvarez11"
  }
};
const saluda = user => {
  const {
    name,
    social: { twiter }
  } = user;

  const orden = ["pizza", "te verde", "pay", 124, false, "otro"];
  const [food, drink, pay, ...restantes] = orden;

  console.log(restantes);
};
saluda(user1);
// export default saluda;
