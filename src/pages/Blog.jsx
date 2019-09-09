import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Blog = props => {
    const quotes = [{
      title: 'Sleater-Kinney Hire New Touring Drummer Angie Boylan',
      body: 'Boylan of Aye Nako and Freezing Cold stepped in for Janet Weiss, who left the band earlier this year'
    },
    {
      title: 'Frankie Cosmos: Close It Quietly',
      body: 'On her fourth studio album, Greta Kline gamely stares down her middle twenties, that messy period where one’s early projections about the future tend to start unraveling.'
    },
    {
      title: 'Lana Del Rey: Norman Fucking Rockwell',
      body: 'On her elegant and complex fifth album, Lana Del Rey sings exquisitely of freedom and transformation and the wreckage of being alive. It establishes her as one of America’s greatest living songwriters.'
    }]

const bueno = useStyles()

    return (
      <>
      <Card className={bueno.pos}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {quotes[0].title}
          </Typography>
          <Typography className={bueno.pos} color="textSecondary">
            {quotes[0].body}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {quotes[1].title}
          </Typography>
          <Typography className={bueno.pos} color="textSecondary">
            {quotes[1].body}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {quotes[2].title}
          </Typography>
          <Typography className={bueno.pos} color="textSecondary">
            {quotes[2].body}
          </Typography>
        </CardContent>
      </Card>
      </>
    );
}

export default Blog
