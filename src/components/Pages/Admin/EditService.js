import React from 'react'
import { connect } from 'react-redux';
import {
    Button,
    Dialog,
    DialogTitle,
    FormControl,
    Select,
    Input,
    InputLabel,
    MenuItem, Paper, DialogContent, DialogActions
} from 'material-ui'
import CheckIcon from 'mdi-material-ui/CheckCircle'
import MaintenanceIcon from 'mdi-material-ui/Wrench'
import IncidentIcon from 'mdi-material-ui/Alert'
import FlagIcon from 'mdi-material-ui/Flag'
import OutageIcon from 'mdi-material-ui/MinusCircle'
import CloudIcon from 'mdi-material-ui/CloudOutline'
import * as actions from '../../../actions'

const iconStyle = {
    verticalAlign: 'center',
    width: 35,
    height: 35
}

class EditServiceDialog extends React.Component {
    state = {
        open: false,
        status: '',
        service: '-'
    };

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

    renderServices() {
        const { services } = this.props;
        return services.map((service, key) => {
            return (
                <MenuItem value={service.id} key={key}>
                    {service.name}
                </MenuItem>
            );
        });
    }
    handleSubmit(){
        console.log(this.state)
        const { updateService } = this.props;
        updateService(this.state.service, {status: this.state.status.toLowerCase()});
    }
    render(){
        const statusCodes = ["OK", "Outage", "Maintenance", "Announcement", "Incident"]
        return (
            <div>
                <Button raised onClick={this.handleClickOpen}>Edit an incident</Button>
                <Dialog open={this.state.open} onRequestClose={this.handleRequestClose} style={{ padding: '2em'}}>
                    <DialogTitle>Select Incident Type</DialogTitle>
                    <DialogContent>
                        <FormControl>
                            <InputLabel htmlFor="service-simple">Service</InputLabel>
                            <Select
                                value={this.state.service}
                                onChange={this.handleChange('service')}
                                input={<Input id="service-simple" />}
                            >
                                {this.renderServices()}
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogContent>
                        <FormControl>
                            <InputLabel htmlFor="service-simple">Status</InputLabel>
                            <Select
                                value={this.state.status}
                                onChange={this.handleChange('status')}
                                input={<Input id="service-simple" />}
                                disabled={!!!this.state.service}
                                style={{minWidth: 300}}
                            >
                            {
                                 statusCodes.map((status, key) => {
                                    return (
                                        <MenuItem value={status} key={key}>
                                            {status}
                                        </MenuItem>
                                    );
                                })

                            }
                            </Select>
                            
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit.bind(this)} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = ({ services }) => ({
    services
});

export default connect(mapStateToProps, actions)(EditServiceDialog)