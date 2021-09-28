import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useStateValue } from "../../StateProvider";

function SelectCategory() {
  const [{selectedCategory}, dispatch] = useStateValue();

  const handleChange = (event) => {
    dispatch({
        type: 'SELECTED_CATEGORY',
        payload: event.target.value
    })
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCategory}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">America</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default SelectCategory;
