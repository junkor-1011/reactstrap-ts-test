import React from 'react';
/* import { Component } from 'react'; */
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';


function executeButtonClicked() {
  // just for test.
  console.log("button clicked.");

  try {
    const testInput: string = (document.getElementById("testInput") as HTMLInputElement).value;
    const testDate: string = (document.getElementById("testDate") as HTMLInputElement).value;
    const testSelect: string = (document.getElementById("testSelect") as HTMLInputElement).value;
    const testSelectMulti = (() => {
      const options: any = document.getElementById("testSelectMulti");
      const listOptionSelected = [];
      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.selected === true) {
          listOptionSelected.push(option.value);
        }
      }
      return listOptionSelected
    })();
    const testTextArea: string = (document.getElementById("testTextArea") as HTMLInputElement).value;

    // read values
    const valueJson: Object = {
      testInput: testInput,
      testDate: testDate,
      testSelect: testSelect,
      testSelectMulti: testSelectMulti,
      testTextArea: testTextArea,
    };
    console.log(valueJson);
  } catch(e) {
    console.log(e);
  }
}

function App() {
  return (
    <div className="App">
      <Container fluid className="h-100">
        <Row>
          <Col>
            <h2>React Simple Example</h2>
          </Col>
        </Row>
        <hr></hr>
        <br></br>
        <Row>
          <Col className="col-3">
            <FormGroup>
              <Label for="testInput">
                <h5>input</h5>
              </Label>
              <Input
                type="text"
                name="testInput"
                id="testInput"
                placeholder="text"
                className="form-comtrol"
              ></Input>
            </FormGroup>
          </Col>
          <Col className="col-3">
            <FormGroup>
              <Label for="testDate">
                <h5>date</h5>
              </Label>
              <Input
                type="date"
                name="testDate"
                id="testDate"
                className="form-control"
              ></Input>
            </FormGroup>
          </Col>
          <Col className="col-3">
            <FormGroup>
              <Label for="testSelect">
                <h5>select</h5>
              </Label>
              <Input
                type="select"
                name="testSelect"
                id="testSelect"
                className="form-comtrol"
              >
                {
                  // JUST FOR TEST
                  Array.from(Array(10), (v, k) => k).map((v, i) => (
                    <option key={i}>option{v}</option>
                  ))
                }
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <FormGroup>
              <Label for="testSelectMulti">
                <h5>select(multiple)</h5>
              </Label>
              <Input
                type="select"
                name="testSelectMulti"
                id="testSelectMulti"
                className="form-control"
                multiple
              >
                <option>optionA</option>
                <option>optionB</option>
                <option>optionC</option>
                <option>optionD</option>
                <option>optionE</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <Form>
              {/* <FormGroup tag="fieldset"> */}
              <FormGroup>
                <legend>Radio Buttons</legend>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="radio"
                      name="testRadio"
                    />{' '}
                    radio1
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="radio"
                      name="testRadio"
                    />{' '}
                    radio2
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="radio"
                      name="testRadio"
                      disabled
                    />{' '}
                    radio3 (disabled)
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="col-4">
            <FormGroup check>
              <Input type="checkbox" name="testCheckBox1" id="testCheckBox1"/>
              <Label for="testCheckBox1" check>checkbox1</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="testCheckBox2" id="testCheckBox2"/>
              <Label for="testCheckBox2" check>checkbox2</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="testCheckBox3" id="testCheckBox3" disabled/>
              <Label for="testCheckBox3" check>checkbox3</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="col-9">
            <FormGroup>
              <Label for="testTextArea">
                <h5>Test TextArea</h5>
              </Label>
              <Input
                type="textarea"
                name="testTextArea"
                id="testTextArea"
                placeholder="for example, description..."
              ></Input>
            </FormGroup>
          </Col>
        </Row>
        <hr></hr>
        <br></br>
        <Row>
          <Col>
            <Button
              color="primary"
              size="lg"
              onClick={executeButtonClicked}
            >Execute</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

console.log("log from outer App.");

export default App;
