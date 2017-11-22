import React from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  Select,
  Input,
  InputLabel,
  MenuItem
} from 'material-ui'
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



class CreateNewIncidentDialog extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false,
      application: '',
      status: 'OK'
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


  render(){
    const statusCodes = ["OK", "Outage", "Maintenance", "Announcement", "Incident"]
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Submit new incident</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose} style={{padding: '1em'}}>
          <DialogTitle>Select Incident Type</DialogTitle>
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
        </Dialog>
      </div>
    )
  }
}

export default CreateNewIncidentDialog