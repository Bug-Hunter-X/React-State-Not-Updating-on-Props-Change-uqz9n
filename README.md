# React State Not Updating on Props Change

This repository demonstrates a common React bug where a component's state fails to update correctly when its props change. The issue arises from using `componentDidMount` to handle prop changes instead of the appropriate lifecycle method, `componentDidUpdate`.

## Bug Description:
The `bug.js` file contains a React component that attempts to update its state based on changes in its `name` prop. However, it incorrectly uses `componentDidMount`, which only runs once after the component is initially mounted. As a result, subsequent prop changes will not trigger a state update.

## Solution:
The `bugSolution.js` file corrects this issue by replacing `componentDidMount` with `componentDidUpdate`. `componentDidUpdate` allows the component to react to prop changes after the initial render.

## How to run:
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.