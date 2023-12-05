import React, { useState, useCallback, useEffect, useRef } from "react";
import { Container } from "./styleComponents/style";
import { TextField, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { ChromePicker } from "react-color";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import ClearIcon from "@mui/icons-material/Clear";
function Client() {
  return (
    <>
      <Container>
        <div className="container">
          {/* <h1>11</h1>
          <h2>22</h2>
          <h3>33</h3>
          <p>ddd</p> */}
        </div>
      </Container>
    </>
  );
}
export default Client;
