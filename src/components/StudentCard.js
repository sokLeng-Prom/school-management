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
    maxWidth: "auto",
    height: 150,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    marginTop: "2rem"
  },
  media: {
    height: 100,
    width: 100,
    margin: "2rem"
  },
  name:{
    marginTop: "-3rem",
    paddingTop: "4rem"
  },
  displayButton:{
    marginRight: "2rem",
  },
  profile:{
    display: "flex",
    justifyContent: "left",
    
  }
  
});

export default function StudentCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} id={`student-card-${props.id}`}>
      <CardActionArea className={classes.profile}>
        <CardMedia
          className={classes.media}
          image={img1}
          title="Contemplative Reptile"
        /><Typography className={classes.name} gutterBottom variant="h5" component="h2">
        {props.name}
      </Typography>
        <CardContent>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={3} className={classes.displayButton}>
          <Grid item xs={6}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => props.updateAttendance(props.id, true)}
            >
              Present
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => props.updateAttendance(props.id, false)}
            >
              Absent
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
