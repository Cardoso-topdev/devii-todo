import React from "react";
import {
  Edit,
  SimpleForm,
  useNotify,
  useRedirect,
  required,
} from "react-admin";

import { CustomTextInput, CustomDateInput } from "../base/CustomInputs";
import CustomToolbar from "../base/CustomToolbar";
import { Card, CardContent, Typography, styled } from "@mui/material";
import { CANCELLED, COMPLETED } from "../../constants";
import TaskStatus from "./TaskStatus";
import { TaskInput } from "../../types";

const CustomEdit = styled(Edit)({
  "& .MuiCard-root": {
    boxShadow: "none",
  },
});

const TaskEdit = (): JSX.Element => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Task updated successfully`); // default message is "ra.notification.updated"
    redirect("list", "tasks");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transform = (data: any) => {
    const { cancelled, completed, task, userid, status } = data;
    const taskInput: TaskInput = {
      task,
      userid,
      cancelled: status === CANCELLED && cancelled ? new Date(cancelled) : null,
      completed: status === COMPLETED && completed ? new Date(completed) : null,
    };
    return taskInput;
  };
  return (
    <Card sx={{ p: 3.5, width: "564px", borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" color="primary.main">
          Edit Task
        </Typography>
        <CustomEdit
          title="Edit a Task"
          mutationOptions={{ onSuccess }}
          mutationMode="pessimistic"
          transform={transform}
        >
          <SimpleForm toolbar={<CustomToolbar list="tasks" title="Save" />}>
            <CustomTextInput disabled source="id" />
            <CustomDateInput disabled source="created" />
            <CustomTextInput source="task" validate={[required()]} multiline />
            <TaskStatus source="status" />
          </SimpleForm>
        </CustomEdit>
      </CardContent>
    </Card>
  );
};

export default TaskEdit;
