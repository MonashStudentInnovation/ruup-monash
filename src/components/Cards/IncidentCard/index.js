import React from 'react'
import {
  Card,
  CardContent,
  Typography
} from 'material-ui'
import CheckMark from 'mdi-material-ui/Check'
import CrossIcon from 'mdi-material-ui/Close'

import CheckIcon from 'mdi-material-ui/CheckCircle'
import MaintenanceIcon from 'mdi-material-ui/Wrench'
import IncidentIcon from 'mdi-material-ui/Alert'
import FlagIcon from 'mdi-material-ui/Flag'
import OutageIcon from 'mdi-material-ui/MinusCircle'
import CloudIcon from 'mdi-material-ui/CloudOutline'

const iconStyle = {
  verticalAlign: 'center', 
  width: 35, 
  height: 35
}


class IncidentCard extends React.Component {
  statusIcon(status){
    switch(status){
      case "ok":
        return <CheckIcon 
          style={{...iconStyle, color: "#39c49e"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "outage":
        return <OutageIcon 
          style={{...iconStyle, color: "#eb4d5c"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "maintenance":
        return <MaintenanceIcon 
          style={{...iconStyle, color: "#3f46ad"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "announcement":
        return <FlagIcon 
          style={{...iconStyle, color: "#ff944b"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      case "incident":
        return <IncidentIcon 
          style={{...iconStyle, color: "#eeb522"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
      default:
        return <CloudIcon 
          style={{...iconStyle, color: "#90a4ae"}}
          onMouseOver={this.handlePopoverOpen} 
          onMouseOut={this.handlePopoverClose}/>
    }
  }


  render(){
    const { incidentDate, incidentTime, title, affectedServices, status, type, description } = this.props
    return (
      <Card>
        <CardContent>
          <div>
            {this.statusIcon(type)}
            <Typography type="subheading">
              {incidentDate}
            </Typography>
          </div>
          <Typography type="headline">
            {title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography type="body2">
            {description}
          </Typography>
        </CardContent>
        <CardContent>
          {
            status === "Resolved" ? 
            <CheckMark style={{color: "#4caf50"}}/> :
            <CrossIcon style={{color: "#d32f2f"}} />
          }
          <Typography type="caption">
            {status}
          </Typography>
          <Typography type="caption">
            {incidentTime}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default IncidentCard