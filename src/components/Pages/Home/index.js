import React from 'react'
import {
  Grid,
  Typography
} from 'material-ui'
import StatusCard from '../../Cards/StatusCard'
class HomePage extends React.Component {
  render(){
    return(
      <div style={{padding: '1em'}}>
        <Grid container>
          <Grid item xs={12} style={{backgroundColor: '#ececec'}}>
            <Typography type="headline">
              Our Services
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <StatusCard
              status='ok'
              serviceName='eduroam'
              type='Network'
              />
          </Grid>
          <Grid item xs={4}>
            <StatusCard
              status='outage'
              serviceName='eduroam'
              type='Network'
              statusMessage='Everything is fucked over here'
              />
          </Grid>
          <Grid item xs={4}>
            <StatusCard
              status='incident'
              serviceName='eduroam'
              type='Network'
              />
          </Grid>
          <Grid item xs={4}>
            <StatusCard
              status='maintenance'
              serviceName='eduroam'
              type='Network'
              />
          </Grid>
          <Grid item xs={4}>
            <StatusCard
              status='announcement'
              serviceName='eduroam'
              type='Network'
              />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default HomePage