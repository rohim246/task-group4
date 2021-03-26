import { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

class Calculate extends Component {
    constructor() {
        super()
        this.state = {
            number: 0,
            result: 0,
            x: null,
            y: null,
            operator: "+"
        }
    }

    handlePlus = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleReset = () => {
        this.setState({
            number: 0
        })
    }

    handleMinus = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        const { x, y, operator } = this.state
        switch (operator) {
            case '+':
                this.setState({
                    result: +x + +y
                })
                break
            case '-':
                this.setState({
                    result: +x - +y
                })
                break
            case '*':
                this.setState({
                    result: +x * +y
                })
                break
            case '/':
                this.setState({
                    result: +x / +y
                })
                break
            default: return this.state
        }
    }

    render() {
        return (
            <>
                <h2>{this.state.number}</h2>
                <Button outline color="success" onClick={this.handlePlus}>
                    +
                </Button>
                <Button outline color="danger" onClick={this.handleReset}>
                    Reset
                </Button>
                <Button outline color="success" onClick={this.handleMinus}>
                    -
                </Button>
                <hr />
                <h2>{this.state.result}</h2>
                <hr />
                <Form style={{ margin: "0 auto", width: "10%" }}>
                    <FormGroup>
                        <Label>X</Label>
                        <Input
                            type="number"
                            name="x"
                            placeholder="masukan nilai X"
                            onChange={(event) => this.handleInput(event)}
                        />
                    </FormGroup>
                    <Input
                        type="select"
                        name="operator"
                        onChange={(event) => this.handleInput(event)}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </Input>
                    <FormGroup>
                        <Label>Y</Label>
                        <Input
                            type="number"
                            name="y"
                            placeholder="masukan nilai Y"
                            onChange={(event) => this.handleInput(event)}
                        />
                    </FormGroup>
                </Form>
                <Button className="mb-3" color="primary" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </>
        )
    }
}


export default Calculate