// MUI Imports
import {
  Card,
  CardContent,
  Grid,
  RadioGroup,
  RadioGroupProps,
  useTheme,
} from "@mui/material";

// React Imports
import React from "react";

// Components Imports
import { RadioItem } from "./radio-item";

export function CardRadio() {
  const [value, setValue] = React.useState("one");
  const handleChange: RadioGroupProps["onChange"] = (evt, v) => {
    void evt;
    setValue(v);
  };

  const theme = useTheme();
  console.log(theme);

  return (
    <Card>
      <CardContent>
        <RadioGroup value={value} onChange={handleChange}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <RadioItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <RadioItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <RadioItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <RadioItem />
            </Grid>
          </Grid>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
/**
 * With auto margins, flex items can be centered, spaced away or packed into sub-groups.
 * Unlike justify-content, which is applied to the flex container, auto margins go on flex items.
 * They work by consuming all free space in the specified direction.
 */
