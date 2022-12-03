import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Item from "../Components/Item";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path="/Item">
      <Item/>
    </ComponentPreview>
  </Previews>;
};

export default ComponentPreviews;
