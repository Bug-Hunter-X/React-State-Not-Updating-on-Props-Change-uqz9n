This corrected component uses `componentDidUpdate` to check for changes in the `name` prop.  The `prevProps` argument allows the component to only update the state if the `name` prop has actually changed.  This prevents unnecessary re-renders and state updates.

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.setState({ name: this.props.name });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
      </div>
    );
  }
}

export default MyComponent;
```