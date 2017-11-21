import React from 'react'
import { findDOMNode } from 'react-dom'
import {
  Typography,
  Card,
  CardContent,
  Popover
} from 'material-ui'
import CloudOKIcon from 'mdi-material-ui/CloudCheck'
import CloudNotOKIcon from 'mdi-material-ui/CloudOffOutline'
import CloudIcon from 'mdi-material-ui/CloudOutline'
import { withStyles } from 'material-ui/styles'

const iconStyle = {
  verticalAlign: 'center', 
  width: 35, 
  height: 35
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class QuickStatusCard extends React.Component {
  constructor(){
    super()
    this.state ={
      anchorEl: null,
      popperOpen: false,
    }
  }
  
  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  statusIcon(status){
    switch(status){
      case "ok":
        return <CloudOKIcon 
          style={{...iconStyle, color: "#4caf50"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "outage":
        return <CloudNotOKIcon 
          style={{...iconStyle, color: "#d32f2f"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      default:
        return <CloudIcon 
          style={{...iconStyle, color: "#90a4ae"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
    }
  }


  handleStatusTitle(status){
    switch(status){
      case "ok":
        return "Everything is OK!!!"
      case "outage":
        return "We know something is broken! Our team is looking at it!"
      default:
        return "We are not sure what is happening, but we will get back to you ASAP!"
    }
  }
  render(){
    const { status, type, serviceName, classes, statusMessage, statusTitle } = this.props
    const { anchorEl, popperOpen } = this.state;
    const open = !!anchorEl;
    return (
      <Card style={{textAlign: 'left'}}>
        <CardContent style={{display: 'flex', flexFlow: "row wrap"}}>
          <div style={{flexGrow: 2, alignSelf: "flex-start"}}>
            <Typography type="subheading" gutterBottom style={{color: "#546e7a"}}>
              {type}
            </Typography>
            <Typography type="headline">
              {serviceName}
            </Typography>
          </div>
          <div style={{minHeight: '100%', alignItems: 'center', display: 'flex'}}>
            {this.statusIcon(status)}
          </div>
      
        </CardContent>
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onRequestClose={this.handlePopoverClose}
        >
          <div style={{padding: '1em'}}>
            <Typography type="title">
              {!statusTitle ? this.handleStatusTitle(status) : statusTitle}
            </Typography>
            <Typography type="subheading" gutterBottom>
              {statusMessage && statusMessage}
            </Typography>

          </div>
        </Popover>
      </Card>
    )
  }
}

export default withStyles(styles)(QuickStatusCard)