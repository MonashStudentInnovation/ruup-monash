import React from 'react'
import { connect } from 'react-redux';
import {
  Grid,
  Typography
} from 'material-ui'
import StatusCard from '../../Cards/StatusCard'

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


class HomePage extends React.Component {
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

  renderCards() {
    return this.props.services.map(({ id, name, type, status }) => (
        <Grid key={id} item xs={4}>
          <StatusCard
              serviceName={name}
              type={type}
              status={status}
          />
        </Grid>
    ));
  }

  render(){
    const status = ["OK", "Outage", "Maintenance", "Announcement", "Incident"]
    console.log(this.props.services);
    return(
      <div style={{padding: '1em'}}>
        <Grid container>
          <Grid item xs={12} style={{backgroundColor: '#ececec'}}>
            <Grid container style={{width: "100%", flexDirection: 'row',textAlign: 'left'}}>
              <Grid item xs={4}>
                <Typography type="headline">
                  Our Services
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Grid container style={{flexDirection: 'row-reverse'}}>
                  {
                    status.reverse().map((value, key) => {
                      return  <Grid item xs={2} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{marginRight: '10px'}}>{this.statusIcon(value.toLowerCase())}</div>
                                <div> {value} </div>
                              </Grid>
                    })
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {this.renderCards()}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ services }) => ({
    services
});

export default connect(mapStateToProps)(HomePage);