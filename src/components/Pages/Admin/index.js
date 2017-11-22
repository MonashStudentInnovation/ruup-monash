import React from 'react'
import {
  Grid,
  Typography
} from 'material-ui'
import CreateNewIncident from './CreateNewIncident'

class AdminPage extends React.Component {
  
  render(){
   return ( 
      <div style={{padding: '1em'}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography type="headline">
              Status Administration
            </Typography>
            <CreateNewIncident />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AdminPage