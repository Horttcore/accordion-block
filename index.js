import attributes from "./components/attributes";
import edit from "./components/edit";
import save from "./components/save";
import icon from "./components/icon";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType("ralfhortt/accordion", {
  title: __("Accordion", "accordion"),
  icon: icon,
  category: "common",
  keywords: [
    __("Toogle", "accordion"),
    __("Collapsable", "accordion")
  ],
  attributes,
  edit,
  save
});
