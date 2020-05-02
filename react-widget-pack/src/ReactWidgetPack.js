import React from "react";
import PropTypes from "prop-types";

class ReactWidgetPack extends React.Component {
  widgetLoaded() {
    window.WPac.init([{ widget: "Comment", id: this.props.id }]);
  }

  createScriptElement() {
    if (this.props.enable) {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = "https://embed.widgetpack.com/widget.js";
      script.onload = () => this.widgetLoaded();
      document.head.appendChild(script);
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(script, s.nextSibling);
    }
  }

  // For Refresh
  componentDidUpdate() {
    this.createScriptElement();
  }

  // For initial load
  componentDidMount() {
    this.createScriptElement();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.enable ? (
          <div>
            <div id="wpac-comment"></div>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

ReactWidgetPack.defaultProps = {
  enable: true,
  channel: "1",
  id: 1
};

ReactWidgetPack.propTypes = {
  enable: PropTypes.bool,
  channel: PropTypes.string,
  id: PropTypes.number
};

export default ReactWidgetPack;
