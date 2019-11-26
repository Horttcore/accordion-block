const { RichText, InnerBlocks } = wp.blockEditor;
const { Component } = wp.element;

export default class Save extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: { title }
    } = this.props;

    return (
      <details className="accordion">
        <RichText.Content
          tagName="summary"
          className="accordion__title"
          value={title}
        />
        <div className="accordion__body">
          <InnerBlocks.Content />
        </div>
      </details>
    );
  }
}
