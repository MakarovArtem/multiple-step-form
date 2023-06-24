import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { setEmail, setNumber } from "store/reducers/mainSlice";

import { useForm, Controller } from "react-hook-form";

import { PatternFormat } from "react-number-format";

import Info from "components/info/Info";
import InputController from "components/UI/input/InputController";
import Button from "components/UI/button/Button";

import styleInput from "components/UI/input/Input.module.css";
import style from "./MainPage.module.css";

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {
  
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {isValid}
  } = useForm({ mode: "onBlur" });

  const dispatch = useAppDispatch();
  const numberDef = useAppSelector(state => state.main.phone);
  const emailDef = useAppSelector(state => state.main.email);
  
  const onSubmit = (data: any) => {
    dispatch(setNumber(data.phone));
    dispatch(setEmail(data.email));
    navigate("/create");
  }

  return (
    <main className={style.main}>
      <div className={style.infoContainer}>
        <Info />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.inputContainer}>
          <Controller
            name="phone"
            control={control}
            defaultValue={numberDef}
            rules={{ 
              required: true, 
              pattern: {value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, message: "Wrong phone number format"},
            }}
            render={({
              field,
            }) => (
              <div className={styleInput.inputContainer}>
                <p className={styleInput.inputTitle}>Number</p>
                <PatternFormat
                  format="+7 (###) ###-##-##"
                  {...field}
                  disabled={true}
                  style={{background: "rgba(0, 0, 0, 0.04)"}}
                  className={styleInput.input}
                  id="field-number"
                />
              </div>
            )}
          />
        </div>
        <div className={style.inputContainer}>
          <Controller
            name="email"
            control={control}
            defaultValue={emailDef}
            rules={{ 
              required: true,
              pattern: {value: /^[\w.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,10})+$/, message: "Wrong email format"}
            }}
            render={({
              field,
            }) => (
              <InputController
                {...field}
                disabled={true}
                title='Email' 
                type='email'
                placeholder="ARTEMMAKAROV76@YANDEX.RU"
                tip={""}
                id="filed-email"
              />
            )}
          />
        </div>
        <div className={style.buttonContainer}>
          <Button disabled={isValid ? false : true} onClick={handleSubmit(onSubmit)} text="Начать" theme={"blue"} id="button-start"/>
        </div>
      </form>
    </main>
  )
}

export default MainScreen;