import classes from "./image-picker.module.css";

export default function ImagePicker({ label }) {
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input type="file"/>
      </div>
    </div>
  );
}
