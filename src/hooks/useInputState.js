import { useState } from "react";

export default function useInputState(initialValue) {
  // useState를 사용하여 상태와 상태를 업데이트하는 함수를 가져옴
  const [state, setState] = useState(initialValue);

  // 상태를 업데이트하는 함수를 커스텀 훅으로 반환
  const updateState = (e) => {
    setState(e.target.value);
  };

  // 상태와 상태 업데이트 함수를 배열로 반환
  return [state, updateState];
}
