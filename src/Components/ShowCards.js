import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
     <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://media.npr.org/assets/img/2018/08/03/npr_freshair_podcasttile_wide-981a00305a1818fdde128ab26d9071dafc9f36ac.jpg?s=1400"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Fresh Air
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Fresh Air with Terry Gross, the Peabody Award-winning weekday magazine of contemporary arts and issues, is one of public radio's most popular programs.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
    </Grid>
           <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="data:image/png;base64,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"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    On The Media
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    WNYC’s weekly investigation into how the media shapes our worldview. 
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://media.wnyc.org/i/1860/1860/l/80/2020/10/MorningE_000_LOGO122883254.jpg"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Morning Edition
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Every weekday for over three decades, Morning Edition has taken listeners around the country and the world with two hours of multi-faceted stories and commentaries that inform, challenge and occasionally amuse. Morning Edition is the most listened-to news radio program in the country.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://4fi2fy3hz0lp1pco501bgin0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/All-Things-Considered-Logo.png"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    All Things Considered
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    All Things Considered is the most listened-to, afternoon drive-time, news radio program in the country. Every weekday the two-hour show is hosted by Ailsa Chang, Audie Cornish, Mary Louise Kelly, and Ari Shapiro.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://media.npr.org/assets/img/2018/08/03/npr_embedded_podcasttile_sq-9cfac61b95254470103b47e731e2fad976b6dd41.jpg?s=1400"
                  title="Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Embedded
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Host Kelly McEvers takes a story from the news and goes deep. Whether that means digging into the Trump administration's past, the stories behind police shootings caught on video, or visiting a town ravaged by the opioid epidemic, Embedded takes you where the news is happening.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.nationalpublicmedia.com/uploads/2019/10/1A_Podcast-640x640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    1A
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Host Jenn White convenes a national conversation about the most important issues of our time, from politics and technology to pop culture and sports.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
    </Grid>
  </Grid>
  );
}