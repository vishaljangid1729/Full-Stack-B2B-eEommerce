import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';
import { Data } from './data';




const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
    
  root: {
    display: 'flex',
  },
  
 
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  var [index, changeindex] = React.useState(1);
 


  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
    
    
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider></Divider>
      
      <List>
              <ListItem button primary full large onClick = {()=>changeindex(index = 1)}  > <Typography  variant="h6" noWrap>
                  Dashboard

              </Typography></ListItem>
              <ListItem button primary full large onClick={() => changeindex(index = 2)} >
                  <Typography variant="h6" >
            Orders
                  </Typography>


              </ListItem>
              <ListItem button primary full large onClick={() => changeindex(index = 3)}  >
                  <Typography variant="h6" noWrap>
                      Items
                  </Typography>


              </ListItem>
              <Divider></Divider>
              <List>
          <ListItem button primary full large onClick={() => changeindex(index = 4)}  >
            <Typography variant="h6" noWrap>
              Sales Report
                  </Typography>


          </ListItem>
          <ListItem button primary full large onClick={() => changeindex(index = 7)}  >
            <Typography variant="h6" noWrap>
              Payments
                  </Typography>


          </ListItem>
          

          </List>
          <Divider></Divider>
        <ListItem button primary full large onClick={() => changeindex(index = 5)}  >
          <Typography variant="h6" noWrap>
            Customer Feedback
                  </Typography>


        </ListItem>
        <ListItem button primary full large onClick={() => changeindex(index = 6)}  >
          <Typography variant="h6" noWrap>
            Contact Us
                  </Typography>


        </ListItem>
        
              
      </List>
    </div>
  );
  console.log(props);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}h
          >
                      <i class="material-icons">view_headline</i>
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
            
          </Typography>
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" id = "for_mobile">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor= 'left'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} id = "makeStyle">
        <div className={classes.toolbar} />
        {/* {console.log(index)} */}
        
      
                  <Data index={index}  ></Data>
      </main>
    </div>
  );
}



ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default ResponsiveDrawer;