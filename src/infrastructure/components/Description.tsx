import * as React from 'react';

interface IProps {
    countBy?: number
}

interface IState {
    count: number
}

class Description extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        countBy: 1
    };

    public state: IState = {
        count: 0
    };

    public render() {
        return (
            <div>
                <p>
                    My number is {this.state.count}
                </p>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }

    private increase = () => {
        const countBy: number = this.props.countBy!;
        const count: number = this.state.count + countBy;
        this.setState({count})
    };
}

export default Description;