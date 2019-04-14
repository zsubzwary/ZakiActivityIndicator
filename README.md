![npm](https://img.shields.io/npm/v/zakiactivityindicator.svg) ![npm](https://img.shields.io/npm/dt/zakiactivityindicator.svg) 

---

## Installation

Open your project and run `npm i zakiactivityindicator` or `yarn add zakiactivityindicator`

## Usage

1. Import the package with `import { ZakiActivityIndicator } from 'zakiactivityindicator';`
2. Add this to the render method `<ZakiActivityIndicator loading={this.state.loading} />`

This will work based on the loading state, if the state `loading` is set to `true` it will show up, otherwise not.