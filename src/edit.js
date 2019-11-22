const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { InnerBlocks } = wp.editor;

export default class Edit extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: { title },
      setAttributes,
      className
    } = this.props;

    let classNames = `${className} accordion`;

    return (
      <div className={classNames}>
        <div className="accordion__content">
          <RichText
            tagName="div"
            className="accordion__title"
            label={__("Title")}
            value={title}
            placeholder={__("Title")}
            keepPlaceholderOnFocus
            onChange={title => setAttributes({ title })}
          />
          <div className="accordion__body">
            {"undefined" !== typeof props.insertBlocksAfter ? (
              <InnerBlocks />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
