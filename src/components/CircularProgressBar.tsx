import { Component } from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import { Project } from '../models/Project';


interface CercleState {
  percent: number;
  data: { x: number; y: number }[];
}

class Cercle extends Component<Project, CercleState> {

  constructor(props: Project) {
    super(props);
    this.state = {
      percent: 25,
      data: this.getData(0),
    };
  }

  componentDidMount() {
    let percent = 0;
      percent += (this.props.now / this.props.goal) * 100;
      percent = percent > 100 ? 0 : percent;
      this.setState({
        percent,
        data: this.getData(percent),
      });
  }

  componentDidUpdate(prevProps: Project) {
    if (prevProps.goal !== this.props.goal) {
      this.updateData();
    }
  }

  updateData() {
    const percent = (this.props.now / this.props.goal) * 100;
    this.setState({
      percent,
      data: this.getData(percent),
    });
  }

  getData(percent: number) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: ({ datum }) => {
                  const color = datum.y > 30 ? 'green' : 'red';
                  return datum.x === 1 ? color : 'transparent';
                },
              },
            }}
          />
          <VictoryAnimation duration={1000} data={{ percent: this.state.percent }}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={200}
                  text={`${Math.round(Number(newProps.percent))}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default Cercle;
