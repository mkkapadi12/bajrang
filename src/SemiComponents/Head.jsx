import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "styled-components";

const Head = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Wrapper className="">
        <div className="">
          <div className="location">
            <Button variant="contained" onClick={handleClickOpen}>
              <LocationOnIcon />
              Location
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Address of Bajrang Latkan
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
          <div className="">
            <p>
              <EmailIcon /> bajranglatkan@gmail.com
            </p>
            <p>
              <PhoneIcon /> +91 9727434078
            </p>
            <p>
              <AccessTimeIcon /> Mon-Sun 8:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Head;

const Wrapper = styled.section``;
