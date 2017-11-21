import React from 'react'
import {
  Grid
} from 'material-ui'
import StatusCard from '../../Cards/StatusCard'
class HomePage extends React.Component {
  render(){
    return(
      <div style={{padding: '1em'}}>
        <Grid container>
          <Grid item xs={4}>
            <StatusCard
              status='ok'
              serviceName='eduroam'
              type='Network'
              />
          </Grid>
          <Grid item xs={4}>
            <StatusCard
              status='down'
              serviceName='eduroam'
              type='Network'
              />
          </Grid>
          <Grid item xs={4}>
            <StatusCard
              status='ok'
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