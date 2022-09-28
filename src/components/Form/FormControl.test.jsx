import { render, screen } from '@testing-library/react';
import { InputControl, SelectControl } from './FormControl.jsx';

test('Input Control', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your user name');
  expect(inputControl.required).toBe(true);
});

test('Select Control', async () => {
  render(
    <SelectControl label="Pizza" name="pizza" required>
      <option>Hawaiian</option>
      <option>Pepperoni</option>
      <option>Combo</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Pizza');
  expect(selectControl.name).toBe('pizza');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(3);
});
