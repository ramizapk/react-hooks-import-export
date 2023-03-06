import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain";
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  console.log(RMFunctions.trees);
  // => "Aspen and Pine"

  RMFunctions.wildlife();
  // => "Elk, Bighorn Sheep, Moose"

  RMFunctions.elevation();
  // => Attempted import error

  return (
    <div>
      <MesaVerde />
    </div>
  );
}


export default ColoradoStateParks;