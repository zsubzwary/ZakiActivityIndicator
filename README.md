![npm](https://img.shields.io/npm/v/zakiactivityindicator.svg) ![npm](https://img.shields.io/npm/dt/zakiactivityindicator.svg) 

---

## Installation

Open your project and run `npm i zakiactivityindicator` or `yarn add zakiactivityindicator`

## Usage

1. Import the package with `import { ZakiActivityIndicator } from 'zakiactivityindicator';`
2. Add this to the render method `<ZakiActivityIndicator loading={this.state.loading} />`

This will work based on the loading state, if the state `loading` is set to `true` it will show up, otherwise not.

## Sample Code

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { ZakiActivityIndicator } from 'zakiactivityindicator';

export class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};

		// To hide loading after a specified time
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 1500);
	}

	render() {
		return (
			<View>
				<ZakiActivityIndicator loading={this.state.loading} />

				<Text> Home Screen </Text>
				<Text> All of your content goes here... </Text>
			</View>
		);
	}
}

export default HomeScreen;
```

