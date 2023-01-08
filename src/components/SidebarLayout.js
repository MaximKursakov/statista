import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
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