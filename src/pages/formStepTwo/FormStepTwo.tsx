import React, { FC, useState, useEffect } from "react";
import ProgressLine from "../../components/progressLine/ProgressLine";
import AdvantageList from "../../components/advantageList/AdvantageList";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import Radio from "../../components/radio/Radio";
import style from "./FormStepTwo.module.css";

interface FormStepTwoProps {}

const FormStepTwo: FC<FormStepTwoProps> = () => {
  
  return (
    <article className={style.main}>
      <div className={style.mainContainer}>
        <ProgressLine step="two" />
        <form className={style.form} action="post">
          <div className={style.inputsContainer}>
            <p className={style.inputsTitle}>Advantages</p>
            <AdvantageList count={3} />
          </div>
          <div className={style.buttonAddContainer}>
            <Button text="+" themeBlue={false} id="button-add"/>
          </div>
          <div className={style.checkboxContainer}>
            <Checkbox 
              title="Checkbox group" 
              groupName="checkboxGroup" 
              options={["1", "2", "3"]} 
              optionsId={[
                "field-checkbox-group-option-1",
                "field-checkbox-group-option-2",
                "field-checkbox-group-option-3",
              ]}
              id="checkbox-group"
            />
          </div>
          <div className={style.radioContainer}>
            <Radio 
              title="Radio group" 
              groupName="radioGroup" 
              options={["1", "2", "3"]} 
              optionsId={[
                "field-radio-group-option-1",
                "field-radio-group-option-2",
                "field-radio-group-option-3",
              ]}
              id="radio-group"
            />
          </div>
          <div className={style.backContainer}>
            <Button text="Назад" themeBlue={false} id="button-back" />
          </div>
          <div className={style.nextContainer}>
            <Button text="Далее" themeBlue={true} id="button-next" />
          </div>
        </form>
      </div>
    </article>
  )
}

export default FormStepTwo;