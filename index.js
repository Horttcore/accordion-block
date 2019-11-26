import attributes from "./src/attributes";
import edit from "./src/edit";
import save from "./src/save";
import icon from "./src/icon";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("ralfhortt/accordion", {
  title: __("Accordion", "accordion"),
  icon: icon,
  category: "common",
  keywords: [__("Toogle", "accordion")],
  attributes,
  edit,
  save
});
