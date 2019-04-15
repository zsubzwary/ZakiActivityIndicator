![npm](https://img.shields.io/npm/v/zakiactivityindicator.svg) ![npm](https://img.shields.io/npm/dt/zakiactivityindicator.svg) [![install size](https://packagephobia.now.sh/badge?p=zakiactivityindicator)](https://packagephobia.now.sh/result?p=zakiactivityindicator)

---

## Installation

Open your project and run `npm i zakiactivityindicator` or `yarn add zakiactivityindicator`

## Usage

1. Import the package with `import ZakiActivityIndicator from 'zakiactivityindicator';`
2. Add this to the render method `<ZakiActivityIndicator loading={this.state.loading} />`

This will work based on the loading state, if the state `loading` is set to `true` it will show up, otherwise not.

## Sample Code

**<u>On Page Load:</u>**

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ZakiActivityIndicator from 'zakiactivityindicator';

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
    }, 2000);
  }

  render() {
    return (
      <View>
        <ZakiActivityIndicator loading={this.state.loading} />

        <Text style={{ fontSize: 30, color: '#000' }}> Home Screen </Text>
        {/* All you content goes in here ! */}
      </View>
    );
  }
}

export default HomeScreen;

```

**Output:**

![A GIF Showing output](https://imgur.com/JAPCH7W.gif)

---



**<u>On Button Press:</u>**

```javascript
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import ZakiActivityIndicator from 'zakiactivityindicator';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ZakiActivityIndicator loading={this.state.loading} />

        <Text style={{ fontSize: 30, color: '#000' }}> 😇 !! Hello World !! 😇 </Text>

        <Button
          title={'Let’s Do Some Work'}
          onPress={() => {
            this.setState({
              loading: true
            });

            // Hide loading after your processing is done
            setTimeout(() => {
              this.setState({
                loading: false
              });
            }, 2000);
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;

```

**Output:**

![An GIF showing loading icon](https://imgur.com/trXB0q0.gif)
