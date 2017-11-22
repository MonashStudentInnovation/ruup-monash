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

const iconStyle = {
    verticalAlign: 'center',
    width: 35,
    height: 35
}

class CreateNewIncidentDialog extends React.Component {
    state = {
        open: false,
        application: '',
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
        return services.map(({ id, name }) => {
            return (
                <MenuItem value={id}>
                    {name}
                </MenuItem>
            );
        });
    }

    render(){
        return (
            <div>
                <Button raised onClick={this.handleClickOpen}>Edit an incident</Button>
                <Dialog open={this.state.open} onRequestClose={this.handleRequestClose} style={{ padding: '2em'}}>
                    <DialogTitle>Select Incident Type</DialogTitle>
                    <DialogContent>
                        <FormControl>
                            <InputLabel htmlFor="status-simple">Service</InputLabel>
                            <Select
                                native
                                value={this.state.service}
                                onChange={this.handleChange('service')}
                                input={<Input id="service-simple" />}
                            >
                                <MenuItem value="-">
                                    <em>None</em>
                                </MenuItem>
                                {this.renderServices()}
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleRequestClose} color="primary">
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

export default connect(mapStateToProps)(CreateNewIncidentDialog)