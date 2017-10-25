import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IncrementIcon from 'material-ui/svg-icons/content/add';
import DecrementIcon from 'material-ui/svg-icons/content/remove';
import DeleteIcon from 'material-ui/svg-icons/content/delete-sweep';
import Paper from 'material-ui/Paper';

import {
  addCounter,
  incrementCounter,
  decrementCounter,
  deleteCounter
} from '../../actions/counterActions';

class CounterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCounter: {
        title: ''
      }
    };
    this.addCounter = this.addCounter.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.generateRows = this.generateRows.bind(this);
    this.trySubmit = this.trySubmit.bind(this);
  }

  addCounter() {
    const { newCounter } = this.state;
    if (newCounter.title) {
      this.props.addCounter(newCounter.title);
      this.setState({
        newCounter: {
          title: '',
          error: ''
        }
      });
    } else {
      this.setState({
        newCounter: {
          ...newCounter,
          error: 'Field is required.'
        }
      });
    }
  }

  updateTitle(e) {
    this.setState({
      newCounter: {
        error: '',
        title: e.target.value
      }
    });
  }

  trySubmit(e) {
    if (e.key === 'Enter' && this.state.newCounter.title) {
      this.addCounter();
    }
  }

  generateRows(counters) {
    return counters.map((counter, key) =>
      <TableRow key={key}>
        <TableRowColumn>{counter.title}</TableRowColumn>
        <TableRowColumn>
          {counter.count}
        </TableRowColumn>
        <TableRowColumn>
          <IconButton
            onClick={() => this.props.incrementCounter(counter.id)}
            className="counter__adjust-btn counter__adjust-btn--inc"
          >
            <IncrementIcon />
          </IconButton>
          <IconButton
            onClick={() => this.props.decrementCounter(counter.id)}
            className="counter__adjust-btn counter__adjust-btn--dec"
          >
            <DecrementIcon />
          </IconButton>
          <IconButton
            onClick={() => this.props.deleteCounter(counter.id)}
            className="counter__adjust-btn counter__adjust-btn--del"
          >
            <DeleteIcon />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }

  render() {
    const counters = this.props.counters;
    const { title } = this.state.newCounter;
    const sumOfCounters =
      counters.length > 0
        ? counters
          .map(val => val.count)
          .reduce((a, b) => a + b)
        : 0;

    return (
      <div className="counter">
        <Paper zDepth={1} className="counter__header--container">
          <TextField
            hintText="Title"
            floatingLabelText="New Counter"
            value={title}
            className="counter__new-title--input"
            onChange={this.updateTitle}
            onKeyUp={this.trySubmit}
            style={{
              width: 200
            }}
          />
          <RaisedButton label="Add" onClick={this.addCounter} />
        </Paper>
        <Divider />
        <Paper zDepth={5}>
          <Table
            selectable
            displaySelectAll={false}
          >
            <TableHeader enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Counter</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.generateRows(counters)}
            </TableBody>
          </Table>
        </Paper>
        <Divider />
        <Paper zDepth={1} className="counter__total--container center right-text">
          <span className="counter__total--label">Total:</span>
          <span className="counter__total--value">
            {sumOfCounters}
          </span>
        </Paper>
      </div>
    );
  }
}

CounterPage.propTypes = {
  counters: Proptypes.array.isRequired,
  addCounter: Proptypes.func.isRequired,
  incrementCounter: Proptypes.func.isRequired,
  decrementCounter: Proptypes.func.isRequired,
  deleteCounter: Proptypes.func.isRequired
};

function mapStateToProps({ counters }) {
  return {
    counters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addCounter,
    incrementCounter,
    decrementCounter,
    deleteCounter
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);

