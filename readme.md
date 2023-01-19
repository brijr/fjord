Run the following command in a new directory:

(Remember we are simulating other users downloading and installing our library, so this project should be completely separate from the library itself)
npx create-react-app my-app --template typescript
Open the new my-app directory that is created and run:
npm run start
Confirm that you are able to open and load the default application screen on localhost:3000 (or whatever port it opens on).

Now comes the test for our library. From the root directory of your new my-app project, run the following command:
npm install @YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME
So for my project for example its: npm install @alexeagleson/template-react-component-library

Presuming your tokens and configuration are set up properly, everything will install correctly (if there are any issues, revisit the example for the ~/.npmrc config.)

Now open the my-app project in your IDE of choice (VS Code for example) and navigate to the src/App.tsx file.

When you go to add a <Button /> component, if your editor supports import auto complete (ctrl/cmd + . for VS Code) then you will see it automatically recognize thanks to Typescript that our library exports that button.

Auto import

Lets add it! The simplest example to update src/App.tsx is:

src/App.tsx
import React from "react";
import { Button } from "@alexeagleson/template-react-component-library";

function App() {
  return <Button label="Hello world!"/>;
}

export default App;
And when we run npm run start again, there tucked up in the corner is our Hello world! button.

Hello world button

And that's it! Congratulations! You now have all the tools you need to create and distribute a React component library using Typescript! At this point you end the tutorial and continue on your own if you wish.