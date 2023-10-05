import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { FaUserCircle, FaShoppingBag, FaUserCheck, FaCog } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
// import { logout } from '../../redux/counterSlice'
import { buttonStyle, listItemStyle } from "./SideNavStyles";
import { PermIdentity, Settings } from "@mui/icons-material";
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const drawerWidth = 240;
const listItemData = [
//   { label: "Classes & Students", icon: <svg id="Group_16" data-name="Group 16" xmlns="http://www.w3.org/2000/svg" width="29.35" height="29.35" viewBox="0 0 67.35 67.35">
//   <path id="Shape" d="M51.564,67.35H15.785A15.8,15.8,0,0,1,0,51.565V15.786A15.8,15.8,0,0,1,15.785,0H51.564A15.8,15.8,0,0,1,67.35,15.786V51.565A15.8,15.8,0,0,1,51.564,67.35ZM15.785,5.261A10.537,10.537,0,0,0,5.261,15.786V51.565A10.537,10.537,0,0,0,15.785,62.089H51.564A10.537,10.537,0,0,0,62.089,51.565V15.786A10.537,10.537,0,0,0,51.564,5.261ZM52.748,56.825H46.961a2.63,2.63,0,1,1,0-5.261h5.787a2.63,2.63,0,1,1,0,5.261ZM49.2,46.569H27.229a2.632,2.632,0,0,1,0-5.264H49.2a2.632,2.632,0,0,1,0,5.264ZM25.123,15.916H14.075a2.63,2.63,0,1,1,0-5.261H25.123a2.63,2.63,0,1,1,0,5.261Z" transform="translate(0 0)" fill="#cf242a"/>
//   <path id="Shape-2" data-name="Shape" d="M36.436,15.39H17.891a2.629,2.629,0,1,1,0-5.258H36.436a2.629,2.629,0,1,1,0,5.258ZM27.229,5.264H2.632A2.632,2.632,0,0,1,2.632,0h24.6a2.632,2.632,0,0,1,0,5.264Z" transform="translate(16.706 20.914)" fill="#cf242a"/>
// </svg>
//  },
  {
    label: "Inquiries",
    link: "/inquiries",
    icon: <FolderSharedIcon />
  },
  {
    label: "Confirmed Bookings",
    link: "/confirmed-booking",
    icon:<ConfirmationNumberIcon/>
  },
  {
    label: "Packages",
    link: "/packages",
    icon: <InventoryIcon/>
  },
  {
    label: "Calendar",
    link: "/calendar",
    icon: <CalendarMonthIcon/>
  },
  {
    label: "Message Portal",
    link: "/message",
    icon: <ChatIcon/>
  },
  {
    label: "Invoice/ Receipts",
    link: "/inovice",
    icon: <InsertDriveFileIcon/>
  },
  {
    label: "Business Profile",
    link: "/business-profile",
    icon:<AccountBoxIcon/>
  },

];
function SideNav(props) {
  const { window } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const drawer = (
    <div className="" style={{backgroundColor:"black",height:"100vh"}}>
      <div className="" style={{width:"14rem"}}>
      <img width={"100%"} src={require("../assets/HealthHop logo reverse on dark background.png")} alt="" />
      </div>

      <Divider sx={{ backgroundColor: 'white' }} />
      <List className="">
        {listItemData.map((value, i) => (
          <RenderItem value={value} i={i} />
        ))}
      </List>
     
      <List>
        <ListItem disablePadding className=" list_text " onClick={() => {
          // dispatch(logout())
          navigate('/')
        }}>
          <ListItemButton className=" list_text">
            <ListItemIcon sx={{ color: "white",  marginRight: -3 }} >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize: 14, color: "white",  }} title='logout'>Logout</Typography>} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className=""
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
        bgcolor: "black",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#FFFFFF",
            color: "#AFB7BE",
            zIndex: { md: 1000, xs: 1200 },
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
      
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            bgcolor: "black",
            color: "#AFB7BE",
            width: drawerWidth,
            zIndex: { md: 1100, xs: 1200 },
          },
        }}
        open
      >
        {drawer}
      </Drawer>

    </Box>
  );
}


SideNav.propTypes = {
  window: PropTypes.func,
};

export default SideNav;



const RenderItem = ({ value, i }) => {
  return (
    value.link ? <ListItem
      key={i}
      component={NavLink}
      to={value?.link || ""}
      disablePadding
      sx={listItemStyle}
    >
      <ListItemButton
        className="list-item list_text "
        sx={{ ...buttonStyle }}
      >
        <ListItemIcon className="myIconClass" sx={{color:"white",  marginRight: -3}}> {value.icon}</ListItemIcon>
        <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize: 14, color: "white", paddingLeft: 0 }} title={value.label}>{value.label}</Typography>} />
      </ListItemButton>
    </ListItem> :

      <ListItemButton className="list-item list_text no_link_list_item "
        sx={{ ...buttonStyle, "&:hover": { backgroundColor: "" } }}
      >
        <ListItemIcon className="myIconClass" sx={{ color: "white",  }}>{value.icon}</ListItemIcon>
        <ListItemText className="" primary={<Typography variant="body2" style={{ fontSize: 14, color: "white", fontWeight: "bold" }} title={value.label}>{value.label}</Typography>} />
      </ListItemButton>
  );
};
