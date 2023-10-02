import { Outlet, Link } from "react-router-dom";

import "./Layout.css";
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Article, Group, Web } from '@mui/icons-material';

const Layout = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          Chess Statistics
        </li>

      </ul>
    </nav>
    <main className="page">
      <Box className="sideMenu">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Article />
              </Avatar>
            </ListItemAvatar>
            <Link to="/">
              <ListItemText primary="Main Page" secondary="Jan 9, 2014" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Group />
              </Avatar>
            </ListItemAvatar>
            <Link to="/players">
              <ListItemText primary="Players" secondary="Jan 7, 2014" />
            </Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Web />
              </Avatar>
            </ListItemAvatar>
            <Link to="/tournaments">
              <ListItemText primary="Tournaments" secondary="July 20, 2014" />
            </Link>
          </ListItem>
        </List>
        <Link to="/player/create">
          <Button>Add Player</Button>
        </Link>

        <Button>Add Tournament</Button>
      </Box>
      <div className="display">
        <Outlet />
      </div>
    </main>
  </div>
);

export default Layout;


