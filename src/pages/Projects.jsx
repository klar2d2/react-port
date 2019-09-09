import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div className='card'>
    <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="one.jpg"
          title="Calvin and Hobbes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This project was made with node.js, sequelize and materialize.css
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Link
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="two.jpg"
          title="Calvin and Hobbes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 2
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This project was made with node.js, sequelize and materialize.css
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Link
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="three.jpg"
          title="Calvin and Hobbes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Project 3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This project was made with node.js, sequelize and materialize.css
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Link
        </Button>
      </CardActions>
    </Card>
    </div>
  </div>
  );
}
