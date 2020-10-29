const { RichText, InnerBlocks } = wp.blockEditor;
const { Component } = wp.element;

export default class Save extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: { title, isOpen }
    } = this.props;

    return (
      <details className="accordion" {...(isOpen && { open: true })}>
        <RichText.Content
          tagName="summary"
          value={title}
          className="accordion__title"
        />
        <div className="accordion__body">
          <InnerBlocks.Content />
        </div>
      </details>
    );
  }
}
