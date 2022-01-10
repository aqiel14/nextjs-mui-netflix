import Image from "next/image";

import {
  Box,
  Container,
  Grid,
  AppBar,
  Button,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import BorderedBottomBox from "../wrapper/BorderedBottomBox";
import { ArrowForwardIos } from "@mui/icons-material";

const Header = () => {
  return (
    <BorderedBottomBox>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          p: "25px 20px",
          position: "absolute",
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <Image
                src="/__images/netflix.svg"
                height="45px"
                width="170px"
                layout="intrinsic"
                alt="Netflix Logo"
              />
            </Grid>
            <Grid item xs="auto">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue="ID"
                sx={{
                  border: "2px solid #FFF",
                  color: "common.white",
                  "& .MuiSelect-icon": {
                    color: "common.white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button color="primary" variant="contained">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          height: "745px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            content: '""',
            background: "rgba(0,0,0,0.4)",
            backgroundImage: `linear-gradient(
                to bottom,
                rgba(0,0,0,0.6) 0,
                rgba(0,0,0,0.1) 60%,
                rgba(0,0,0,0.8) 100%,
            )`,
          },
        }}
      >
        <Image
          src="/__images/backdrop.jpg"
          layout="fill"
          objectFit="cover"
          alt="backdrop Netflix"
        />
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 1000,
          }}
        >
          <Typography
            variant="h2"
            color="common.white"
            component="h1"
            fontWeight={600}
            textAlign="center"
          >
            Unlimited movies, TV shows, and more.
          </Typography>

          <Typography
            variant="h5"
            color="common.white"
            component="p"
            textAlign="center"
            gutterBottom
          >
            Watch anywhere. Cancel anytime.
          </Typography>

          <Typography
            variant="h6"
            color="common.white"
            component="p"
            textAlign="center"
            sx={{
              my: 3,
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Grid container sx={{ py: 4 }}>
            <Grid item xs>
              <TextField
                variant="filled"
                label="Email Address"
                fullWidth
                sx={{ bgcolor: "common.white" }}
              />
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  height: "100%",
                  borderRadius: "2px",
                }}
              >
                GET STARTED {<ArrowForwardIos />}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BorderedBottomBox>
  );
};

export default Header;
