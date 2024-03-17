import css from "./SearchBox.module.css";
import { useId } from "react";
import { FaSistrix } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const selectNameFilter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();
  const id = useId();
  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>

      <input
        className={css.input}
        id={id}
        type="text"
        value={selectNameFilter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
      <FaSistrix className={css.icon} />
    </div>
  );
};
