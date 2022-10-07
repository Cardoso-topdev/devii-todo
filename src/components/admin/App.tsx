// eslint-disable-next-line jsx-a11y/media-has-caption
import { ReactElement, useEffect, useState } from "react";
import { Admin, Resource } from "react-admin";
import buildGraphQLProvider, { BuildQueryFactory } from "ra-data-graphql";
import { Box } from "@mui/material";
import { authProvider } from "../../utils/authProvider";
import { gqlClient } from "../../utils/apolloClient";
import { introspectionOperationNames } from "../../utils/dataProvider/introspection";
// eslint-disable-next-line import/namespace
import queryBuilder from "../../utils/dataProvider/buildQuery";
import tasks from "../tasks";
import theme from "../../theme";
import CustomLayout from "../base/CustomLayout";
import { CustomLinearProgress } from "../base/CustomInputs";

const App = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dataProvider, setDataProvider] = useState<any>(null);
  useEffect(() => {
    async function fetchProvider() {
      await authProvider.login({
        login: "demo",
        password: "demo1234",
        tenantid: "10",
      });
      const client = gqlClient();
      const dp = await buildGraphQLProvider({
        client,
        introspection: {
          operationNames: introspectionOperationNames,
          exclude: undefined,
          include: undefined,
        },
        buildQuery: queryBuilder as BuildQueryFactory,
      });
      setDataProvider(() => dp);
    }

    fetchProvider();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette?.background?.default}`,
        height: "100vh",
      }}
    >
      {!dataProvider ? (
        <CustomLinearProgress color="primary" />
      ) : (
        <Admin
          title="Tasks Admin"
          dataProvider={dataProvider}
          theme={theme}
          layout={CustomLayout}
        >
          <Resource name="tasks" {...tasks} />
        </Admin>
      )}
    </Box>
  );
};

export default App;
