import styles from './FormControl.css';
import classnames from 'classnames';


function FormControl({ label, children }) {
  const className = classnames(styles.FormControl, styles.LabelText);
  return (
    <label className={className}>
      {label}
      {children}
    </label>
  );
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest} />
    </FormControl>
  );
}
