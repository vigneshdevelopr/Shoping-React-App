import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";

export function FooterDetails() {
  return (
    <Paper
      className="footer-sec"
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        bottom: 0,
        width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              // onClick={}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              // onClick={}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              // onClick={}
            >
              <EmailOutlinedIcon />
            </IconButton>
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" fontSize={16}>
            Copyright ©2023. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
