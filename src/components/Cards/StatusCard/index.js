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


import CheckIcon from 'mdi-material-ui/CheckCircle'
import MaintenanceIcon from 'mdi-material-ui/Wrench'
import IncidentIcon from 'mdi-material-ui/Alert'
import FlagIcon from 'mdi-material-ui/Flag'
import OutageIcon from 'mdi-material-ui/MinusCircle'

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
        return <CheckIcon 
          style={{...iconStyle, color: "#4caf50"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "outage":
        return <OutageIcon 
          style={{...iconStyle, color: "#d32f2f"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "maintenance":
        return <MaintenanceIcon 
          style={{...iconStyle, color: "#303f9f"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "announcement":
        return <FlagIcon 
          style={{...iconStyle, color: "#ff5722"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "incident":
        return <IncidentIcon 
          style={{...iconStyle, color: "#ffeb3b"}}
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
      case 'maintenance':
        return "Our Services are currently under maintenance, we will be back with you soon"
      case 'incident':
        return "We currently investigating issues"
      case 'announcement':
        return 'There is something planned or going to happen please read more about it in our announcements'
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
        <CardContent>
          {status}
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