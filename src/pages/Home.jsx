import { useState } from "react";
import SigninForm from "../components/SigninForm/SigninForm";
import SignupForm from "../components/SignupForm/SignupForm";
import Page from "../styled/base/Page/Page";
import Heading from "../components/Heading/Heading";
import Grid from "../styled/layout/Grid/Grid";
import GridItem from "../styled/layout/Grid/GridItem";

export default function Home() {
  const [selection, setSelection] = useState("signup");

  return (
    <Page className="bg-gray-800">
      <main className="h-full flex justify-center content-center">
        <Grid>
          <GridItem>
            <Heading
              heading="Welcome to Teams/we make it easy"
              subheading="Manage your teams, members and projects all in one place."
            />
          </GridItem>

          <GridItem>
            {selection === "signin" ? (
              <SigninForm setSelection={setSelection} />
            ) : (
              <SignupForm setSelection={setSelection} />
            )}
          </GridItem>
        </Grid>
      </main>
    </Page>
  );
}
