import React from "react";
import { InputProps, required, useInput } from "react-admin";
import {
  Chip,
  MenuItem,
  Box,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { CANCELLED, COMPLETED } from "../../constants";
import { CustomDateInput, CustomSelect } from "../base/CustomInputs";

const statuses: Array<string> = [COMPLETED, CANCELLED];

const TaskStatus = (props: InputProps<unknown>) => {
  const { field } = useInput(props);
  return (
    <>
      <FormControl sx={{ mb: 8, width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label" sx={{ fontSize: "1rem" }}>
          Status
        </InputLabel>
        <CustomSelect
          {...field}
          input={<OutlinedInput id="select-multiple-chip" label="Status" />}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          renderValue={(selected: any) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              <Chip
                label={selected}
                color={selected === COMPLETED ? "success" : "error"}
                sx={{ fontSize: "0.8125rem" }}
              />
            </Box>
          )}
          endAdornment={
            <IconButton
              sx={{ display: field.value ? "" : "none" }}
              onClick={() => field.onChange("")}
            >
              <ClearIcon sx={{ fontSize: "1.3rem" }} />
            </IconButton>
          }
          sx={{
            borderColor: "white",
            "& .MuiSelect-iconOutlined": { display: field.value ? "none" : "" },
          }}
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status} sx={{ height: "30px" }}>
              {status}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
      {field.value === COMPLETED && (
        <CustomDateInput source="completed" validate={[required()]} />
      )}
      {field.value === CANCELLED && (
        <CustomDateInput source="cancelled" validate={[required()]} />
      )}
    </>
  );
};

export default TaskStatus;
