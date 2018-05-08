import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Stage, Layer, Rect, Circle, Group } from "react-konva";
import MyCenterRect from "./MyCenterRect.js";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scale: { x: 1, y: 1 }
    };
  }
  componentDidMount() {
    var _rect_width = 100 * this.scale;
    var _rect_height = 100 * this.scale;
    this.setState({
      _offset: {
        x: _rect_width / 2,
        y: _rect_height / 2
      }
    });
    console.log("componentDidMount");
  }
  render() {
    var self = this;

    return (
      <div style={styles}>
        <button
          onClick={() => {
            self.state.scale = {
              x: self.state.scale.x + 1,
              y: self.state.scale.y + 1
            };
            self.setState({ scale: self.state.scale });
          }}
        >
          scale add
        </button>
        <button
          onClick={() => {
            self.state.scale = {
              x: self.state.scale.x - 1,
              y: self.state.scale.y - 1
            };
            self.setState({ scale: self.state.scale });
          }}
        >
          scale down
        </button>

        <div style={{ padding: "100px" }}>
          <Stage
            ref={node => (self._stage_ = node)}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ border: "1px solid #eee" }}
          >
            <Layer>
              <MyCenterRect
                x={100}
                y={100}
                fill={"red"}
                scale={{
                  x: this.state.scale.x,
                  y: this.state.scale.y
                }}
              />
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
