import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const Rectangle = (props) => (
  <Svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={50} height={50} rx={10} fill="#DF0000" fillOpacity={0.1} />
  </Svg>
);

export default Rectangle;
