import styles from './Dashboard.css';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <form>

        <label>
          Name
          <input name="name" placeholder="Your name" />
        </label>
        
        <label>
          Date
          <input type="date" name="date" />
        </label>

        <label>
          Option
          <select>
            <option disabled selected value="">
              Select an option...
            </option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </label>

        <label>
          Bio
          <textarea name="bio" placeholder="tell us about yourself" />
        </label>

        <fieldset>
          <legend>Do you agree to our terms and services?</legend>

          <label>
            I accept
            <input type="checkbox" />
          </label>

          <label>
            I do not accept
            <input type="checkbox" />
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
    </div>
  );
}
