# Typescript port of 3D Portfolio Website with Three.js and React.js by adrianhajdin

This is a typescript port of the 3D Portfolio Website example by @adrianhajdin.

Check out the original repo [here](https://github.com/adrianhajdin/project_3D_developer_portfolio).

The accompanying youtube video tutorial can be found here [here](https://www.youtube.com/watch?v=0fYi8SGA20k).
___


## Getting Started
After checking out the code, run the following two commands to install dependencies and start the dev server:

````
npm install

npm run dev
````
___

## Notes


In comparison to the original code I made a couple of small changes:
- replaced the original [SectionWrapper higher-order component](https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/hoc/SectionWrapper.jsx), with a [SectionWrapper component](https://github.com/nebomilic/3d_portfolio/blob/main/src/components/utils/SectionWrapper.tsx). Hocs are hard to type and to me it felt more natural to use a simple component in this place
- replaced [`react-tilt`](https://www.npmjs.com/package/react-tilt) dependency with [`react-parallax-tilt`](https://www.npmjs.com/package/react-parallax-tilt). The latter is based on typescript and is under active development.
- couple of minor adjustment because typescript 🤷


That's it!


