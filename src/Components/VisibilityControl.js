export default function VisibilityControl({
  isChecked,
  newValue,
  description,
}) {
  return (
    <div className="form-check form-switch d-flex ">
      <label htmlFor="form-check-label">
        <h5 className="fw-bold m-0 pe-3">All {description}</h5>
      </label>
        <input
          className="form-check-input  ms-1"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => newValue(e.target.checked)}
        />
    </div>
  );
}
