import React from 'react'
import { connect } from 'react-redux';
import {
  Grid,
  CircularProgress,
  Typography
} from 'material-ui'
import StatusCard from '../../Cards/StatusCard'
import IncidentCard from '../../Cards/IncidentCard'
import CheckIcon from 'mdi-material-ui/CheckCircle'
import MaintenanceIcon from 'mdi-material-ui/Wrench'
import IncidentIcon from 'mdi-material-ui/Alert'
import FlagIcon from 'mdi-material-ui/Flag'
import OutageIcon from 'mdi-material-ui/MinusCircle'
import CloudIcon from 'mdi-material-ui/CloudOutline'

const iconStyle = {
  verticalAlign: 'center', 
  width: 20, 
  height: 20
}

class HomePage extends React.Component {
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

  renderCards() {
    const { services } = this.props
    return services.map(({ id, name, type, status }) => (
        <Grid key={id} item xs={4}>
          <StatusCard
              serviceName={name}
              type={type}
              status={status}
          />
        </Grid>
    ));
  }
  
  renderHeader(){
    const status = ["OK", "Outage", "Maintenance", "Announcement", "Incident"]
    return <Grid item xs={12} style={{backgroundColor: '#fff', padding: '1em'}}>
    <Grid container style={{width: "100%", flexDirection: 'row',textAlign: 'left'}}>
      <Grid item xs={4}>
        <Typography type="headline" style={{fontWeight:500}}>
          Our Services
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Grid container style={{flexDirection: 'row-reverse'}}>
          {
            status.reverse().map((value, key) => {
              return  <Grid item xs={2} style={{display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', paddingTop:'12px'}}>
                        <div style={{marginRight: '2px'}}>{this.statusIcon(value.toLowerCase())}</div>
                        <div style={{fontSize:'14px', fontWeight:300, paddingBottom: '0.2em'}}> {value} </div>
                      </Grid>
            })
          }
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  }

  renderIncidents(incidents) {
    return incidents.map(({ id, date, time, title, affectedServices, status, type, description }) => (
          <Grid key={id} item xs={4}>
            <IncidentCard
                incidentDate={date}
                incidentTime={time}
                title={title}
                affectedServices={affectedServices}
                status={status}
                type={type}
                description={description}
            />
          </Grid>
      ));
  }

  renderCurrentincidents() {
    const { incidents } = this.props;
    const currentIncidents = incidents.filter(incident => !incident.isPast);
    return this.renderIncidents(currentIncidents);
  }

  renderPastIncidents() {
    const { incidents } = this.props;
    const pastIncidents = incidents.filter(incident => incident.isPast);
    return this.renderIncidents(pastIncidents);
  }

  render(){
    const { services } = this.props 
    console.log(this.props.services);
    return(
      <div style={{padding: '1em', minHeight: '100%'}}>
        <Grid container style={{minHeight: '100%', marginBottom: '2em'}} alignItems="center">
          {this.renderHeader()}
          {
            services.length != 0 ?
            this.renderCards():
            <Grid item xs={12} style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <CircularProgress size={100} />
              <Typography type="title">
                Loading the Service Status for the First Time...
              </Typography>
            </Grid>

          }
        </Grid>
        <Grid container style={{minHeight: '100%', backgroundColor: '#eee', textAlign: 'left', padding: '1em'}}>
          <Grid item xs={12}>
            <Typography type="headline">
              Current Incidents
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
                {this.renderCurrentincidents()}
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{minHeight: '100%', backgroundColor: '#eee', textAlign: 'left', padding: '1em'}}>
          <Grid item xs={12}>
            <Typography type="headline">
              Past Incidents
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              {this.renderPastIncidents()}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ services, incidents }) => ({
    services,
    incidents
});

export default connect(mapStateToProps)(HomePage);