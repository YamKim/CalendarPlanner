import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import { charCountState, textState } from "@/state/character";

import {} from "../state/character";

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

interface CharacterCounterProps {
  className: string;
}

export default function CharacterCounter(props: CharacterCounterProps) {
  return (
    <div className={props.className}>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
