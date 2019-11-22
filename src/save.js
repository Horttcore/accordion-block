const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { InnerBlocks } = wp.editor;

export default class Save extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: { title },
      className
    } = this.props;

    return (
      <div className="accordion">
        <div className="accordion__content">
          <RichText.Content
            tagName="div"
            className="accordion__title"
            value={title}
          />
          <div className="accordion__body">
           <InnerBlocks.Content />
          </div>
        </div>
      </div>
    );
  }
}
