import {Component} from "react";

class Test extends Component {
    constructor(props) { // 1)Відпрацьовує першим
        console.log('constructor')
        super(props);
        this.inc = this.inc.bind(this)
        this.state = {
            someState: 0
        }
    }

    componentDidMount() { // 3) цей метод дозволяє відстежити подію, та виконується після рендеру, фіксуючи факт *монтування об*єкту*.
        // Тобто кожен раз при зміні стану об*єкту буде виконуватись render і componentDidUpdate
        console.log('didMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // 4) фіксує зміну поточного стану об*єкту
        console.log('componentDidUpdate');
        console.log(prevState); // дозволяє бачити попередній стан об*єкту
    }

    componentWillUnmount() { // 5) фіксує повне видалення компоненти
        console.log('componentWillUnmount');
    }

    inc() {
        this.setState(prev => ({someState: prev.someState + 1}))
    }

    render() { //2) Відпрацьовує після конструктора
        return (
            <div>
                <div>state = {this.state.someState}</div>
                <div>state = {this.props.secondProps}</div>
                <button onClick={this.inc}>inc</button>
            </div>
        )
    }
}

export {Test}