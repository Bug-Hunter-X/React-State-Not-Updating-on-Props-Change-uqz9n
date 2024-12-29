This React component uses the wrong lifecycle method for updating the state based on props changes.  The `componentDidMount` lifecycle method only runs once after the component is mounted. If the props change after that, it won't update the state.  The `componentDidUpdate` method should be used instead.