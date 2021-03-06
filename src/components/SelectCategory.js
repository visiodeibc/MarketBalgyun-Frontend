import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";

import useStyles from "../pages/Style";

const SelectCategory = ({ onSelectCategory, setGenOrCon }) => {
  const [category, setCategory] = useState({
    first_category: "00",
    second_category: "0000",
    third_category: "000000",
  });

  const [secondCategories, setSecondCategories] = useState([]);
  const [thirdCategories, setThirdCategories] = useState([]);

  const classes = useStyles();

  const onSelectFirstCategory = (e) => {
    let firstID = e.currentTarget.value;
    setCategory({
      first_category: firstID,
      second_category: firstID + "00",
      third_category: firstID + "0000",
    });
    setSecondCategories(
      JSON.parse(window.sessionStorage.getItem("seconds")).filter((category) =>
        category.ID.startsWith(firstID)
      )
    );
    setThirdCategories([]);
  };

  const onSelectSecondCategory = (e) => {
    let secondID = e.currentTarget.value;
    setCategory({
      ...category,
      second_category: secondID,
      third_category: secondID + "00",
    });
    setThirdCategories(
      JSON.parse(window.sessionStorage.getItem("thirds")).filter((category) =>
        category.ID.startsWith(secondID)
      )
    );
  };

  const onSelectThirdCategory = (e) => {
    setCategory({
      ...category,
      third_category: e.currentTarget.value,
    });
  };

  const onNextStep = (e) => {
    setGenOrCon(e.currentTarget.value);
    onSelectCategory(
      category.first_category,
      category.second_category,
      category.third_category
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography variant="h6" align="center">
          대분류
        </Typography>
        <Divider />
        <List>
          {JSON.parse(window.sessionStorage.getItem("firsts")).map(
            (category) => (
              <ListItem key={category.FirstCategory}>
                <Button
                  value={category.ID}
                  onClick={onSelectFirstCategory}
                  className={classes.button}
                  fullWidth
                >
                  {category.FirstCategory}
                </Button>
              </ListItem>
            )
          )}
        </List>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Typography variant="h6" align="center">
          중분류
        </Typography>
        <Divider />
        {category.first_category &&
          secondCategories.map((category) => (
            <ListItem key={category.SecondCategory}>
              <Button
                value={category.ID}
                onClick={onSelectSecondCategory}
                className={classes.button}
                fullWidth
              >
                {category.SecondCategory}
              </Button>
            </ListItem>
          ))}
      </Grid>

      <Grid item xs={12} sm={4}>
        <Typography variant="h6" align="center">
          소분류
        </Typography>
        <Divider />
        {category.second_category &&
          thirdCategories.map((category) => (
            <ListItem key={category.ThirdCategory}>
              <Button
                value={category.ID}
                onClick={onSelectThirdCategory}
                className={classes.button}
                fullWidth
              >
                {category.ThirdCategory}
              </Button>
            </ListItem>
          ))}
      </Grid>

      <Grid container justify="flex-end">
        <Button value="G" onClick={onNextStep} className={classes.next}>
          일반상품
        </Button>
        <Button value="C" onClick={onNextStep} className={classes.next}>
          위탁상품
        </Button>
      </Grid>
    </Grid>
  );
};

export default SelectCategory;
