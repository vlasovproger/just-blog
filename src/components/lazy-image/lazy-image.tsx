import React, { Component } from "react";
import LazyLoad from "vanilla-lazyload";
type lazyImapeProps = {
  alt: string,
  src: string,
  srcset?: string,
  sizes?: string,
  width?: string,
  height?: string,
}
declare global {
  interface Document {
    lazyLoadInstance: any;
  }
}

export default class LazyImage extends Component<lazyImapeProps, {}> {

  componentDidMount() {
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
      });
    }
    document.lazyLoadInstance.update();
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    const { alt, src, srcset, sizes, width, height } = this.props;
    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
        data-srcset={srcset}
        data-sizes={sizes}
        width={width}
        height={height}
      />
    );
  }
}
