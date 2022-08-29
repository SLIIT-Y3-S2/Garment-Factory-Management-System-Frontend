import { Grid, Box } from "@mui/material";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Container style={{ justifyContent: "space-between" }}>
        <Grid>
          <div
            className="footer_icons"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box className="footer_icons">
              <AiOutlineFacebook className="footer_icons" size={30} />
            </Box>
            &nbsp; &nbsp; &nbsp;
            <Box>
              <AiOutlineWhatsApp className="footer_icons" size={30} />
            </Box>
            &nbsp; &nbsp; &nbsp;
            <Box>
              <AiOutlinePhone className="footer_icons" size={30} />
            </Box>
            &nbsp; &nbsp; &nbsp;
            <Box>
              <AiOutlineMail className="footer_icons" size={30} />
            </Box>
          </div>
        </Grid>

        <Grid>
          <Navbar.Brand href="/">
            <img
              src="/LogoNoBG.png"
              width="130"
              height="130"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Grid>
        <Grid>
          <Box style={{ color: "grey" }} textAlign="center">
            Copyright &reg; {new Date().getFullYear()}
          </Box>
        </Grid>
      </Container>
    </Navbar>
  );
};

export default Footer;
