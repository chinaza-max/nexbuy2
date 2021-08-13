
import ShopIcon from '@material-ui/icons/Shop';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:"center",
    marginTop:"90px",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));
const useStyles2 = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

function DescriptionAlerts(props) {
    const classes = useStyles2();
    console.log(props.errorp)
    return (
        <div className={classes.root}>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
              {props.errorp}
        </Alert>
        </div>
    );
}
function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}

function SimpleAlerts(props) {
    const classes = useStyles2();
  
    return (
      <div className={classes.root}>
        <Alert variant="outlined" severity="success">
          {props.emptyMessagep}
        </Alert>
      </div>
    );
  }
export default function CustomizedBadges(props) {
  return (
      <StyledBadge badgeContent={props.countP} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
  );
}
export {HomeIcon,ShopIcon,ShoppingCartIcon,AccountCircleIcon,CheckCircleIcon,LocalMallIcon,
    ArrowBackIcon,DeleteIcon,CircularIndeterminate,DescriptionAlerts,SimpleAlerts,CustomizedBadges} 