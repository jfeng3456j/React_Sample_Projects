# React Counter App

A simple React application demonstrating basic counter functionality with increment, decrement, and reset operations.

## Prerequisites

- **Node.js**: Version 14.0.0 or higher
- **npm**: Version 6.0.0 or higher (comes with Node.js)
- **React**: Version 19.2.3 (included in dependencies)

## Project Dependencies

### Core Dependencies
- **react**: ^19.2.3
- **react-dom**: ^19.2.3
- **react-scripts**: 5.0.1

### Development Dependencies
- **@testing-library/react**: ^16.3.1
- **@testing-library/jest-dom**: ^6.9.1
- **@testing-library/user-event**: ^13.5.0
- **@testing-library/dom**: ^10.4.1
- **web-vitals**: ^2.1.4

## Getting Started

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```bash
   cd react_counter_app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`
Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

## Project Structure

```
react_counter_app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## Features

- Increment counter
- Decrement counter
- Reset counter to zero
- Responsive design
- Unit tests for counter functionality

## Testing

The project uses React Testing Library for unit tests. To run tests:

```bash
npm test
```

This will launch the test runner in interactive watch mode. Press `a` to run all tests, or `q` to quit the test runner.

## Browser Support

### Production
- >0.2% of global market share
- Not dead browsers
- Not Opera Mini

### Development
- Last 1 Chrome version
- Last 1 Firefox version
- Last 1 Safari version

## ESLint Configuration

This project uses ESLint with the following configuration:
- react-app
- react-app/jest

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

For deployment instructions, refer to the [Create React App deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

## Troubleshooting

If you encounter issues:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete node_modules and package-lock.json:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Reinstall dependencies:
   ```bash
   npm install
   ```

## License

This project is created using Create React App and is open source.

---

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).