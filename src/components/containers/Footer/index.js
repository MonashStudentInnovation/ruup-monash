import React from 'react'
import Config from '../../../config/'
import './index.css'
import {
  Typography,
  Grid
} from 'material-ui'
const flexGrow = {
  textAlign: 'left',
  justifySelf: 'flex-end'
}
const footerStyle = {
  padding: '3em', 
  float: 'bottom', 
  height: '20%', 
  minHeight: '20%',
  maxHeight: '20%',
  bottom: "calc(100vh - 20%)", 
  position: 'sticky', 
  backgroundColor: '#231f20', 
  color: 'white', 
  fontFamily: "Roboto,sans-serif", 
  fontWeight: '10%'
}
const whiteFont = {
  color: '#ddd',
  fontWeight: 300,
  marginBottom: "1em"
}
class Footer extends React.Component {
  render(){
    return (
      <div style={flexGrow}>
        <div style={footerStyle}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <img src="https://www.monash.edu/__data/assets/file/0005/853754/Monash-logo-white.gif" height={50} alt="Monash Logo"/>
            </Grid>
            <Grid item xs={12}>
              <Typography as="p" style={whiteFont} gutterBottom>
                { Config.APP_NAME }- Version {Config.APP_VERSION}
              </Typography>
              <Typography as="p" style={whiteFont} gutterBottom>
                Authorised by: Project Lead, monPlan Team. Maintained by: <a href="https://monplan.github.io" target="_blank" style={{whiteFont}}>monPlan</a> DevOps and Infrastructure
              </Typography>
              <Typography as="p" style={whiteFont} gutterBottom>
                Copyright &copy; 2017 <a href="https://monash.edu/" target="_blank" style={{color: "#ddd"}}>Monash University</a>. ABN 12 377 614 012. &nbsp;
                <a href="http://monash.edu/accessibility.html" target="_blank" style={{whiteFont}}>Accessibility</a> - &nbsp;
                <a href="http://www.monash.edu/disclaimer-copyright" target="_blank" style={{whiteFont}}>Disclaimer and copyright</a> - &nbsp;
                <a href="http://monash.edu/privacy.html" target="_blank" style={{whiteFont}}>Privacy</a> 
              </Typography>
              <Typography as="p" style={whiteFont} gutterBottom>
                CRICOS Provider Number: 00008C
              </Typography>
              <Typography as="p" style={whiteFont} gutterBottom>
                We acknowledge and pay respects to the Elders and Traditional Owners of the land on which our five Australian campuses stand. &nbsp;
                <a href="http://monash.edu/about/indigenous/" target="_blank">Information for Indigenous Australians</a>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Footer