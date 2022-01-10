import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "common.black", color: "grey.700" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography>Questions? Call 007-803-321-2130</Typography>
        <Grid container spacing={4} my={0}>
          <Grid item xs={6} md={3} sx={{ py: 3 }}>
            <Stack spacing={1}>
              <Typography variant="body1" component="a" href="#">
                FAQ
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Investor Relations
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Terms of Use
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Contact Use
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} sx={{ py: 3 }}>
            <Stack spacing={1}>
              <Typography variant="body1" component="a" href="#">
                Help Center
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Jobs
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Privacy
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Speed Test
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} sx={{ py: 3 }}>
            <Stack spacing={1}>
              <Typography variant="body1" component="a" href="#">
                Account
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Redeem Gift Cards
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Cookie Preferences
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Legal Notices
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} sx={{ py: 3 }}>
            <Stack spacing={1}>
              <Typography variant="body1" component="a" href="#">
                Media Center
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Ways to Watch
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Corporate Information
              </Typography>
              <Typography variant="body1" component="a" href="#">
                Only on Netflix
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} sx={{ py: 3 }}>
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
        </Grid>
        <Typography>Netflix Indonesia</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
