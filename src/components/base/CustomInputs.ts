/* eslint-disable jsx-a11y/media-has-caption */
import {
  TextInput,
  DateInput,
  List,
  CreateButton,
  Datagrid,
  EditButton,
  DeleteButton,
} from "react-admin";
import { Theme } from "@mui/system";
import { styled, Select, Chip, LinearProgress } from "@mui/material";

const customStyle = (theme: Theme) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    fontSize: "1rem",
    padding: "12.5px 14px",
  },
  "& .MuiFormLabel-root": {
    fontSize: "1rem",
    top: "4px",
  },
  "& .MuiSelect-select": {
    fontSize: "1rem",
    padding: "12.5px 14px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.text.secondary}23`,
  },
  "& .Mui-disabled + .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.text.secondary}23`,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },
  "& .MuiSvgIcon-root": {
    color: `${theme.palette.text.secondary}50`,
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const editButtonStyle = (theme: Theme): any => ({
  width: "100%",
  textAlign: "left",
  color: "white",
  textTransform: "none",
  fontSize: "1rem",
  borderRadius: 0,
  justifyContent: "flex-start",
  padding: theme.spacing(2.5),
  "&:hover, &:active": {
    backgroundColor: "transparent",
  },
});

export const CustomTextInput = styled(TextInput)(({ theme }) =>
  customStyle(theme)
);
export const CustomDateInput = styled(DateInput)(({ theme }) =>
  customStyle(theme)
);
export const CustomSelect = styled(Select)(({ theme }) => customStyle(theme));
export const CustomList = styled(List)(({ theme }) => customStyle(theme));
export const CustomCreateButton = styled(CreateButton)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  minWidth: "auto!important",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  position: "absolute",
  top: "-32px",
  "&:hover": {
    backgroundColor: `${theme.palette.primary.main}`,
  },
  "& .MuiButton-startIcon": {
    margin: 0,
  },
  "& .MuiSvgIcon-root": {
    color: `${theme.palette.background.default}`,
  },
}));

export const CustomChip = styled(Chip)({
  "& .MuiChip-label": {
    fontSize: "0.8125rem",
  },
});

export const CustomDataGrid = styled(Datagrid)(({ theme }) => ({
  "& .RaDatagrid-headerCell": {
    color: theme.palette.text.secondary,
    padding: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.text.secondary}23`,
  },
  "& .RaDatagrid-rowCell": {
    padding: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.text.secondary}23`,
  },
  "& .RaDatagrid-rowCell:last-child": {
    textAlign: "right",
  },
}));

export const CustomEditButton = styled(EditButton)(({ theme }) =>
  editButtonStyle(theme)
);
export const CustomDeleteButton = styled(DeleteButton)(({ theme }) =>
  editButtonStyle(theme)
);

export const CustomLinearProgress = styled(LinearProgress)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
});
