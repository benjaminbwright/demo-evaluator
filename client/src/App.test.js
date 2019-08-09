import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a welcome message when it loads', () => {
  const component = TestRenderer.create(<App />);
  console.log(component.root);
  const greeting = component.root.findByType('h1');
  expect(greeting.props.children).toBe('Welcome to the project evaluator');
});

