import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Stage, Layer, Rect, Circle, Group } from "react-konva";

class MyCenterRect extends React.Component {
  render() {
    const self = this;
    const width = this.props.width;
    const height = this.props.height;
    const x = this.props.x;
    const y = this.props.y;
    const fill = this.props.fill;
    this.scaleRect();
    return (
      <Group x={width / 2 + x} y={height / 2 + y}>
        <Rect
          draggable={true}
          ref={node => (self._rect_ = node)}
          width={width}
          height={height}
          fill={fill}
          offset={{ x: width / 2, y: height / 2 }}
        />
      </Group>
    );
  }
  scaleRect() {
    var self = this;
    self._rect_ &&
      self._rect_.to({
        scaleX: self.props.scale.x,
        scaleY: self.props.scale.y,
        duration: 0.2
      });
  }
  componentDidMount() {
    this.scaleRect();
  }
}
MyCenterRect.defaultProps = {
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  fill: "#eee",
  scale: { x: 1, y: 1 }
};
export default MyCenterRect;
