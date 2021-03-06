import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Grid, Typography, Paper, Stepper, Step, StepLabel, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

import useStyles from '../pages/Style';
import SelectCategory from "../components/SelectCategory";
import GeneralProuct from "../components/GeneralProduct";
import ConsignProduct from "../components/ConsignProduct";
import { selectCategory, setStep } from '../modules/register';
import Navigation from '../components/Navigation';


const steps = ['카테고리 선택', '상품 정보 입력'];

const RegisterProduct = ({ history }) => {
  const { info, step } = useSelector(({ register }) => ({
    info: register.info,
    step: register.step,
  }));

  const [GenOrCon, setGenOrCon] = useState(''); // 일반/위탁 구분
  const dispatch = useDispatch();
  const onSelectCategory = useCallback((first, second, third) => dispatch(selectCategory(first, second, third)), [dispatch]);
  const onSetStep = useCallback((step) => dispatch(setStep(step)), [dispatch]);
  const classes = useStyles();


  const onPreviousStep = () => {
    onSetStep(0);
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SelectCategory onSelectCategory={onSelectCategory} setGenOrCon={setGenOrCon} />;
      case 1:
        switch (GenOrCon) {
          case 'G':
            return <GeneralProuct mode='new' info={info} onPreviousStep={onPreviousStep} />;
          case 'C':
            return <ConsignProduct history={history} mode='new' info={info} onPreviousStep={onPreviousStep} />;
        }
      default:
        onSetStep(0);
    }
  }


  return (
    <Container className={classes.root}>
      <Paper component='main' elevation={3} className={classes.paper}>
        <Typography variant="h4" align="center" className={classes.header}>
          상품등록
                </Typography>
        <Navigation />
        <Stepper activeStep={step} className={classes.item}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {getStepContent(step)}

      </Paper>
    </Container >

  );
}

export default RegisterProduct;