import React from 'react'
import { connect } from 'react-redux';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  Input,
  InputLabel,
  MenuItem,
  TextField
} from 'material-ui'
import {
  withStyles
} from 'material-ui/styles'
import Moment from 'moment'
import * as actions from '../../../actions';


const iconStyle = {
  verticalAlign: 'center', 
  width: 35, 
  height: 35
}

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});


class CreateNewIncidentDialog extends React.Component {
  constructor(){
    super()
    this.state = {
      serviceDate: Moment(),
      open: false,
      service: 'CALLISTA',
      status: 'Outage',
      title: '',
      description: ''
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit() {
    const { description, service, serviceDate, status, title } = this.state;
    const time = `${serviceDate.format('HH:mm A')} AEST`;
    this.props.createIncident({
        affectedServices: [service],
        date: serviceDate.format('MMM DD, YYYY'),
        description,
        isPast: false,
        status,
        time,
        title,
        type: "announcement"
    });
  }

  render(){
    const statusCodes = ["OK", "Outage", "Maintenance", "Announcement", "Incident"]
    const service = ["CALLISTA", "WES", "EDUROAM"]
    const { serviceDate } = this.state
    const { classes } = this.props
    return (
      <div>
        <Button onClick={this.handleClickOpen} raised>Submit new incident</Button>
        <Dialog open={this.state.open}>
          <DialogTitle>Select Incident Type</DialogTitle>
          <DialogContent>
            <FormControl>
              <InputLabel htmlFor="status-simple">Status</InputLabel>
              <Select
                value={this.state.status}
                onChange={this.handleChange('status')}
                input={<Input id="status-simple" />}
              >
                {
                  statusCodes.map((status, key) => {
                    return <MenuItem value={status} key={key}>{status}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </DialogContent>
          <DialogContent>
            <FormControl>
              <InputLabel htmlFor="service-simple">Service name</InputLabel>
              <Select
                value={this.state.service}
                onChange={this.handleChange('service')}
                input={<Input id="service-simple" />}
              >
                {
                  service.map((service, key) => {
                    return <MenuItem value={service} key={key}>{service}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </DialogContent>
          <DialogContent>
          <TextField
            id="date"
            label="Incident Date"
            type="date"
            value={Moment(serviceDate).format('YYYY-MM-DD')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}

            onChange={(event)=>{this.setState({serviceDate: Moment(event.target.value).format("MMMM DD, YYYY")})}}
             />
          </DialogContent>
          <DialogContent>
                <TextField
                id="name"
                label="Incident Title"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('title')}
                margin="normal"
              />
          </DialogContent>
          <DialogContent>
                <TextField
                id="name"
                label="Incident Description"
                className={classes.textField}
                multiline
                rowsMax="4"
                value={this.state.description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
          </DialogContent>
          <DialogActions>
              <Button onClick={this.handleRequestClose}>Cancel</Button>
              <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default connect(null, actions)(withStyles(styles)(CreateNewIncidentDialog));