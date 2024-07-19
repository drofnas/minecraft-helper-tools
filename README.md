# Simple Minecraft Helpers

Here are a couple very simple helpers when playing Minecraft.

### Chunk Finder

This will let you input your current Coordinates (X and Z) and it will return
the coordinates for each corner block for the Chunk you are currently on. This
is very handle for certain Farms that either need to cross chunk borders together, 
such as Flying Machines OR ones that must be built entirely inside a chunk due
to the chance it will break.

### Portal Linker

Provide the source coordinates (where you currently are) and it will tell you where in
the Nether that those coordinates will link to. Or vice versa, where you will exit from the
Nether when creating a Portal. It's not exact, in the fact that Minecraft will create the 
Portal in the general area and at a random Y level. But this will help when trying to get
to distant lands via a Nether Hub.


# But Why?

This simple website was created in order to test the following language/frameworks. 
I wanted to learn about all of these and how they would work together. So I converted these
helpers from Shell scripts into a React UI.

* React
* Vite
* Tailwind
* Storybook

# Development

If you want to get this running locally, simply download it, and following below:

* Follow the instructions for your OS to install Node: https://nodejs.org/

* Open up the application folder in a Terminal / Command Line.

* Install the application dependancies.

        npm install

* Start the development server.

        npm run dev

* Start Storybook server (if you want to see how that looks).

        npm run storybook
