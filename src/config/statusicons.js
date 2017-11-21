import React from 'react'
import CheckIcon from 'mdi-material-ui/CheckCircle'
import MaintenanceIcon from 'mdi-material-ui/Wrench'
import IncidentIcon from 'mdi-material-ui/Alert'
import FlagIcon from 'mdi-material-ui/Flag'
import OutageIcon from 'mdi-material-ui/MinusCircle'

const iconStyle = {
  verticalAlign: 'center', 
  width: 35, 
  height: 35
}

const Icons = (status) => {
  switch(status){
    case 'ok':
      return <CheckIcon 
      style={{...iconStyle, color: "#4caf50"}}
      {{...this.props}}/>
    case 'maintenance':
      return <MaintenanceIcon />
    case 'incident':
      return <IncidentIcon />
    case 'announcement':
      return <FlagIcon />
    case 'outage':
      return <OutageIcon />
  }
}

export default Icons