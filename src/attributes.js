export default {
  title: {
    type: "string",
    source: "html",
    selector: ".accordion__title",
    default: ""
  },
  isOpen: {
    type: 'bool',
    default: false,
  },
};
