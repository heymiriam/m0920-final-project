import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MovieImg from '../../assets/space-jam.jpeg';
import './content.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from '@material-ui/lab/Rating';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';



const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

function Content(){
return(
    <div className="content">
    <Card className="card" key={movies.id}>
      <CardMedia
        className="cardimg"
        component="img"
        alt="Space Jam: New Legacy"
        height="300"
        //src={MovieImg}
        src={movies.img}
        title="Space Jam: New Legacy"
      />

      <CardContent>
      <div className="heading-cont">
        <Typography align="left" gutterBottom variant="h4" component="div" className="card-heading">
        {movies.movie}
        </Typography>
        <CardActions className="card-btn">
            <IconButton aria-label="edit" color="primary">
             <EditIcon color="primary"></EditIcon>
            </IconButton>
           
            <IconButton aria-label="delete" color="secondary">
            <DeleteIcon color="secondary"/>
            </IconButton>
            
        </CardActions>
        </div>
        <Box component="fieldset" mb={3} borderColor="transparent" align="left" className="rate">
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          className="rate-icons"
        >{movies.rating}</Rating>
      </Box>
        
        <Typography align="left" variant="body1" color="text.secondary">
        {movies.review}
        </Typography>
      </CardContent>
     
    </Card>
        
    </div>
)
}

export default Content;