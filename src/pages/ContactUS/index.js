import React, { useLayoutEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";

import Hero from "../../assets/img/hero.png";
import HandShake from "../../assets/img/handshake.svg";
import Email from "../../assets/img/email.svg";

import {
  useStyles,
  ColorButton,
  SubmitButton,
  FileSubmitButton,
  CssTextField,
} from "./style";

export default function ContactUS() {
  const classes = useStyles();
  const [direction, setDirection] = React.useState("row");

  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 600) setDirection("column-reverse");
      else setDirection("row");
    }
    window.addEventListener("resize", updateSize);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              justify="space-between"
              alignItems="center"
              direction={direction}
            >
              <Grid item xs={12} sm={6}>
                <div className={classes.heroTxt}>
                  {direction !== "column-reverse" && (
                    <Typography gutterBottom variant="h2" component="h3">
                      Contact us
                    </Typography>
                  )}
                  <Typography gutterBottom variant="h4" component="h5">
                    Want to get in touch? We'd love to hear from you. Here's how
                    you can reach us...
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.imgContainer} elevation={3}>
                  {direction === "column-reverse" && (
                    <div>
                      <Typography
                        gutterBottom
                        variant="h2"
                        component="h3"
                        className={classes.heroImgTex}
                      >
                        Contact us
                      </Typography>
                    </div>
                  )}
                  <img className={classes.heroImg} src={Hero} alt="" />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.container}>
          <Container maxWidth="lg">
            <div className={classes.cardContainer}>
              <Paper elevation={3} className={classes.cardLeft}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography className={classes.cardHeaderTxt}>
                    {`Help & Support`}
                  </Typography>
                  <div className={classes.cardBodyTxtContainer}>
                    <Typography className={classes.cardBodyTxt}>
                      {`Our support team is`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`spread across the globe to\n`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`address issues fast.\n`}
                    </Typography>
                  </div>
                  <ColorButton variant="contained" color="primary">
                    {`Visit Support Page`}
                  </ColorButton>
                  <SubmitButton>{`SUBMIT A REQUEST`}</SubmitButton>
                </div>
              </Paper>
              <Paper elevation={3} className={classes.cardRight}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Typography className={classes.cardHeaderTxt}>
                    {`Press`}
                  </Typography>
                  <div className={classes.cardBodyTxtContainer}>
                    <Typography className={classes.cardBodyTxt}>
                      {`Are you interested in our`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`latest news or working on`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`a Mozaicalist story and`}
                    </Typography>
                    <Typography className={classes.cardBodyTxt}>
                      {`need to get in touch?`}
                    </Typography>
                  </div>
                  <ColorButton variant="contained" color="primary">
                    {`Visit Support Page`}
                  </ColorButton>
                </div>
              </Paper>
            </div>
          </Container>
        </div>
        <div className={classes.formContainer}>
          <Container maxWidth="lg">
            <Grid item xs={12} sm container>
              <Grid item xs={12} sm={8} container direction="column">
                <Grid item xs>
                  <Typography gutterBottom className={classes.cardBodyTxt}>
                    Still need help? Send us a message
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  className={classes.emailAndUsernameContainer}
                >
                  <CssTextField
                    className={classes.smlInput}
                    label="Name"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                  <CssTextField
                    className={classes.smlInput}
                    label="Email"
                    variant="outlined"
                    id="custom-css-outlined-input"
                  />
                </Grid>
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  className={classes.emailAndUsernameContainer}
                >
                  <CssTextField
                    className={classes.txtArea}
                    label="Tell us more"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                className={classes.uploadSection}
                direction={direction === "row" ? "column" : "row"}
              >
                <div className={classes.uploadButtonContainer}>
                  <input
                    accept="*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      component="span"
                      style={{
                        padding: 15,
                        maxWidth: 190,
                        width: "100%",
                        backgroundColor: "#eaf5f4",
                        border: "1px dotted #0cad9e",
                      }}
                    >
                      <Grid item container direction="column">
                        <Grid
                          item
                          container
                          direction="row"
                          alignItems="center"
                        >
                          <Typography className={classes.uploadTitle}>
                            {`Upload files`}
                          </Typography>
                          <PublishIcon className={classes.uploadIcon} />
                        </Grid>
                        <Typography className={classes.uploadText}>
                          {`Add images/videos to help us understand.`}
                        </Typography>
                        <Typography className={classes.uploadText}>
                          {`[Maximum file size: 20 MB]`}
                        </Typography>
                      </Grid>
                    </Button>
                  </label>
                </div>
                <FileSubmitButton>{`Submit`}</FileSubmitButton>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs={12} sm={8} container direction="row">
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  className={classes.bottomSection}
                >
                  <Grid item xs={12} sm={5} container direction={"row"}>
                    <Grid item xs={4} className={classes.center}>
                      <img src={HandShake} className={classes.bottomImg} alt="" />
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      container
                      direction={"column"}
                      justify="center"
                    >
                      <Typography className={classes.requestText}>
                        {`PARTNERSHIP REQUESTS:`}
                      </Typography>
                      <Typography>
                        <a
                          className={classes.mailText}
                          href="mailto:partners@mozaicalist.com"
                        >{`partners@mozaicalist.com`}</a>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    container
                    className={classes.emailSection}
                    direction={"row"}
                  >
                    <Grid
                      item
                      xs={4}
                      justify="center"
                      alignItems="center"
                      className={classes.center}
                    >
                      <img src={Email} className={classes.bottomImg} alt="" />
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      container
                      direction={"column"}
                      justify="center"
                    >
                      <Typography className={classes.requestText}>
                        {`MAILING ADDRESS:`}
                      </Typography>
                      <Typography
                        className={classes.smText}
                      >{`Mozaicalist`}</Typography>
                      <Typography
                        className={classes.smText}
                      >{`100 Cambridgepark Drive`}</Typography>
                      <Typography
                        className={classes.smText}
                      >{`#100`}</Typography>
                      <Typography
                        className={classes.smText}
                      >{`Cambridge, MA 02140`}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
