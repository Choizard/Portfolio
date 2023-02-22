import * as React from "react";
import "./App.css";

import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const modals = [
  {
    title: "최자드",
    content: "Content for Modal 1",
  },
  {
    title: "커뮤니티",
    content: "",
  },
  {
    title: "경력",
    content: "Content for Modal 3",
  },
  {
    title: "기술",
    content: "Content for Modal 4",
  },
  {
    title: "활동",
    content: "Content for Modal 5",
  },
  {
    title: "프로젝트",
    content: "Content for Modal 6",
  },
  {
    title: "자소서",
    content: "Content for Modal 7",
  },
];

export default function MyTimeline() {
  const [openModal, setOpenModal] = useState(null);

  const handleClose = () => {
    setOpenModal(null);
  };

  const handleOpenModal = (index) => {
    setOpenModal(index);
  };

  return (
    <body>
      <div className="black-nav">Portfolio</div>
      {modals.map((modal, index) => (
        <p className={"box" + index} key={index} style={{position:'absolute'}}>
          <Button
            onClick={() => handleOpenModal(index)}
            style={{ color: "white" }}
          >
            {modal.title}
          </Button>
          <Modal
            open={openModal === index}
            onClose={handleClose}
            aria-labelledby={`modal-modal-title-${index}`}
            aria-describedby={`modal-modal-description-${index}`}
          >
            <Box sx={{ ...style, width: "auto" }}>
              <Typography
                id={`modal-modal-title-${index}`}
                variant="h6"
                component="h2"
              >
                {modal.title}
              </Typography>
              <Typography
                id={`modal-modal-description-${index}`}
                sx={{ mt: 2 }}
              >
                {modal.content}
              </Typography>
            </Box>
          </Modal>
        </p>
      ))}
    </body>
  );
}
