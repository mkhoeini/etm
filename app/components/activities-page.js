/* @flow */

import React from 'react';
import {Snackbar, Styles} from 'material-ui';
import {connect} from 'react-redux';
import Filters from './filters';
import TaskList from './task-list';
import {ActivitiesPageSelector} from '../selectors';



var ThemeManager = new Styles.ThemeManager();
var {Colors} = Styles;


class Activities extends React.Component {
  constructor(props: Object) {
    super(props)
    this._handleJobDone = this._handleJobDone.bind(this)
    this._handleSnackbarAction = this._handleSnackbarAction.bind(this)
  }

  getChildContext(): Object {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _handleJobDone(): void {
    this.refs.snackbar.show();
  }

  _handleSnackbarAction(): void {
    this.refs.snackbar.dismiss();
  }

  _filterPastTasks(): void {
    console.log('Filter tasks and show just past Tasks');
  }

  _filterCurrentTasks(): void {
    console.log('Filter tasks and show just current Tasks');
  }

  _filterFutureTasks(): void {
    console.log('Filter tasks and show just future Tasks');
  }

  render(): React.Element {
    return (
      <div>
        <Filters
          onCurrentTasks={this._filterCurrentTasks}
          onFutureTasks={this._filterFutureTasks}
          onPastTasks={this._filterPastTasks}/>

        <Snackbar
          action="لغو"
          autoHideDuration={5000}
          message="فعالیت مورد نظر تمام شد"
          onActionTouchTap={this._handleSnackbarAction}
          ref="snackbar"
          style={{minWidth: '100px', paddingRight: '0', paddingLeft: '12px'}}/>

        <TaskList
          onJobFinish={(j) => this._handleJobDone()}
          tasks={this.props.tasks}/>
      </div>
    );
  }
}

Activities.childContextTypes = {
  muiTheme: React.PropTypes.object
};

Activities.propTypes = {
  dispatch: React.PropTypes.Function,
  tasks: React.PropTypes.Array
};


export default connect(ActivitiesPageSelector)(Activities);
