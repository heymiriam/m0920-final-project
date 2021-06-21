import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import testImg from '../../assets/testImg.jpeg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'20px',  
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  workcont:{
      display:'flex',
      flexDirection: 'row',
        justifyContent: 'space-between', 
        backgroundColor:"white",
        alignItems: 'center',
        marginBottom:'0px',
        marginTop:'20px',
  },

  workheading:{
      fontSize:'24px',
      marginLeft:'2%',
      color:'black',
  },
  cards: {
 
    margin:'20px 10px 0px 10px'  ,
    //flexGrow: 5,
    height:'300px',
    width: '40%',
    backgroundImage: `url(${testImg})`,
   
  },
 

  tabPan:{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between'
  },
  cardCont:{ 
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    flexWrap:'wrap',
   
},
tab:{
    color:'black',
}
}));

export default function Work() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  return (
    <Paper className={classes.root}>
      <Paper position="static" color="default" className={classes.workcont}>
        <h3 className={classes.workheading}>Work</h3>  
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Web Dev" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="UX/UI" {...a11yProps(1)} className={classes.tab} />
          <Tab label="Advertising" {...a11yProps(2)} className={classes.tab}/>
          <Tab label="Graphic Design" {...a11yProps(3)} className={classes.tab} />
      
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0} className={classes.tabPan}>
        Item One
        <div className={classes.cardCont}>
        <Card className={classes.cards}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>

    <Card className={classes.cards}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>


    <Card className={classes.cards}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>


    <Card className={classes.cards}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image="../"
        title="Live from space album cover"
      />
    </Card>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Paper>
  );
}