/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line jsx-a11y/media-has-caption
import React, { useState } from "react";
import {
  TextField,
  DateField,
  FunctionField,
  ListContextProvider,
  useList,
  useGetList,
  TopToolbar,
  Filter,
  ExportButton,
  RefreshButton,
} from "react-admin";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  CustomChip,
  CustomCreateButton,
  CustomDataGrid,
  CustomDeleteButton,
  CustomEditButton,
  CustomLinearProgress,
  CustomList,
  CustomTextInput,
} from "../base/CustomInputs";
import { CANCELLED, COMPLETED } from "../../constants";

const options: Array<{ [key in string]: any }> = [
  {
    id: "edit",
    action: <CustomEditButton icon={<></>} label="Edit task" />,
  },
  {
    id: "delete",
    action: <CustomDeleteButton icon={<></>} label="Delete task" />,
  },
];
const ITEM_HEIGHT = 48;

const EditMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {options.map((option: { [key in string]: any }) => (
          <MenuItem key={option.id} onClick={handleClose} sx={{ p: 0 }}>
            {option.action}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const ListActions = () => {
  return (
    <TopToolbar>
      <CustomCreateButton label="" />
      <RefreshButton
        label=""
        sx={{
          minWidth: "auto!important",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          "& .MuiButton-startIcon": {
            margin: 0,
          },
        }}
      />
      <ExportButton
        label=""
        sx={{
          minWidth: "auto!important",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          "& .MuiButton-startIcon": {
            margin: 0,
          },
        }}
      />
    </TopToolbar>
  );
};

const TaskFilter = () => {
  return (
    <Filter>
      <CustomTextInput label="Search" source="task" alwaysOn />
    </Filter>
  );
};

const TaskList = () => {
  const { data, isLoading } = useGetList("tasks");
  const listContext = useList({ data, isLoading });
  return (
    <ListContextProvider value={listContext}>
      {!isLoading ? (
        <Card sx={{ p: 3.5, borderRadius: 2, width: "100%" }}>
          <CardContent>
            <Typography variant="h5" color="primary.main">
              Tasks
            </Typography>
            <CustomList
              sx={{
                "& .MuiCard-root": { boxShadow: "none" },
              }}
              actions={<ListActions />}
              filters={<TaskFilter />}
            >
              <CustomDataGrid optimized bulkActionButtons={false}>
                <TextField source="id" label="Task ID" />
                <TextField source="task" label="Description" />
                <DateField source="created" label="Created" />
                <FunctionField
                  label="Status"
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  sortBy="status"
                  render={(record: any) => {
                    return record.status === COMPLETED ? (
                      <CustomChip label="Completed" color="success" />
                    ) : record.status === CANCELLED ? (
                      <CustomChip label="Cancelled" color="error" />
                    ) : (
                      ""
                    );
                  }}
                />
                <EditMenu />
              </CustomDataGrid>
            </CustomList>
          </CardContent>
        </Card>
      ) : (
        <CustomLinearProgress color="primary" />
      )}
    </ListContextProvider>
  );
};

export default TaskList;
