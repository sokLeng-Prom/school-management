import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// https://stackoverflow.com/questions/51542662/image-not-loading-when-mapping-material-ui-cards
import img1 from "../static/img/student_img_1.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

export default function StudentCard({ name }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Button size="small" variant="contained" color="primary">
              Present
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button size="small" variant="contained" color="secondary">
              Absent
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
