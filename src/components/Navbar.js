import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { makeStyles } from '@mui/styles';

const MENU_ITEMS = [
  {
    key: 'profile',
    url: '#',
    title: 'Profile',
  },
  {
    key: 'education',
    url: '#education',
    title: 'Education',
  },
  {
    key: 'research',
    url: '#research',
    title: 'Research',
  },
  {
    key: 'resume',
    url: '#resume',
    title: 'Resume / CV',
  },
];

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 2,
    background: '#fafafa'
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Menu mode="horizontal" defaultSelectedKeys={['profile']} className={classes.menu}>
      {MENU_ITEMS.map(({ key, url, title }) => (
        <Menu.Item
          key={key}
          style={{
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: 18,
            fontWeight: '600',
          }}
        >
          <a href={`/${url}`}>{title}</a>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Navbar;
