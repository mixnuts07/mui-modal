import { useState } from "react";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Modals = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <DesktopMacIcon className="work-item" onClick={handleOpen} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div">
          <div>
            <CancelPresentationIcon onClick={handleClose} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default Modals;
