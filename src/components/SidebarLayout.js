import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {$,jQuery} from 'jquery';

export function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-around"
        },
      }}
       width='15vw'>
        <Menu
        menuItemStyles={{
          [`.${menuClasses.container}`]: {
            height: "100%"
          }
        }}>
            <MenuItem routerLink={<Link to="/" />}>Aspect scores</MenuItem>
            <MenuItem routerLink={<Link to="/Benchmark" />}>Benchmark</MenuItem>
            <MenuItem routerLink={<Link to="/TimeSeries" />}> Time series</MenuItem>
            <MenuItem routerLink={<Link to="/DriverAnalysis" />}> Driver analysis</MenuItem>
            <MenuItem routerLink={<Link to="/AspectDetails" />}> Aspect details</MenuItem>
        </Menu>
        </Sidebar>;
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}