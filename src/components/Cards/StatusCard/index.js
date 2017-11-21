import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  Popover
} from 'material-ui'
import CloudOKIcon from 'mdi-material-ui/CloudCheck'
import CloudNotOKIcon from 'mdi-material-ui/CloudOffOutline'
import CloudIcon from 'mdi-material-ui/CloudOutline'

const iconStyle = {
  verticalAlign: 'center', 
  width: 35, 
  height: 35
}
class QuickStatusCard extends React.Component {
  statusIcon(status){
    switch(status){
      case "ok":
        return <CloudOKIcon style={{...iconStyle, color: "#4caf50"}}/>
      case "outage":
        return <CloudNotOKIcon style={{...iconStyle, color: "#d32f2f"}}/>
      default:
        return <CloudIcon style={{...iconStyle, color: "#90a4ae"}}/>
    }
  }
  render(){
    const { status, type, serviceName} = this.props
    return (
      <Card style={{textAlign: 'left'}}>
        <CardContent style={{display: 'flex', flexFlow: "row wrap"}}>
          <div style={{flexGrow: 2, alignSelf: "flex-start"}}>
            <Typography type="subheading" gutterBottom style={{color: "#546e7a"}}>
              {type}
            </Typography>
            <Typography type="headline">
              {serviceName}
            </Typography>
          </div>
          <div style={{minHeight: '100%', alignItems: 'center', display: 'flex'}}>
            {this.statusIcon(status)}
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default QuickStatusCard