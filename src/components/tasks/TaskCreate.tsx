import React from "react";
import {
  Create,
  SimpleForm,
  useRedirect,
  required,
  useNotify,
} from "react-admin";
import { CustomTextInput } from "../base/CustomInputs";
import CustomToolbar from "../base/CustomToolbar";
import { Card, CardContent, Typography, styled } from "@mui/material";
import { authProvider } from "../../utils/authProvider";
import { TaskInput } from "../../types";

const CustomCreate = styled(Create)({
  "& .MuiCard-root": {
    boxShadow: "none",
  },
});

const TaskCreate = (): JSX.Element => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Task created successfully`); // default message is "ra.notification.updated"
    redirect("list", "tasks");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transform = (data: any) => {
    const { task } = data;
    const taskInput: TaskInput = {
      task,
      userid: Number(authProvider.getRoleID()),
      cancelled: null,
      completed: null,
    };
    return taskInput;
  };

  return (
    <Card sx={{ p: 3.5, width: "564px", borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" color="primary.main">
          Create Task
        </Typography>
        <CustomCreate
          title="Create a Task"
          mutationOptions={{ onSuccess }}
          transform={transform}
        >
          <SimpleForm toolbar={<CustomToolbar list="tasks" title="Save" />}>
            <CustomTextInput source="task" multiline validate={[required()]} />
          </SimpleForm>
        </CustomCreate>
      </CardContent>
    </Card>
  );
};

export default TaskCreate;
