import React, { useEffect } from "react";
/**
 * NOTE:
 * history 객체는 라우트로 사용된 컴포넌트에게 match, location 과 함께 전달되는 props 중 하나.
 * 이 객체를 통하여, 우리가 컴포넌트 내에 구현하는 메소드에서 라우터에 직접 접근을 할 수 있다.
 * - 특정 함수를 호출했을 때 뒤로가기, 특정 경로로 이동, 이탈 방지 등..
 */

function HistorySample({ history }) {
  //뒤로가기
  const goBack = () => {
    history.goBack();
  };

  //특정경로로 이동 (방문기록 남김)
  const goHome = () => {
    history.push("/");
  };

  //특정경로로 이동 (방문기록 안남김)
  const replaceToHome = () => {
    history.replace("/");
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로 가기</button>
      <button onClick={replaceToHome}>홈으로 가기(Replace)</button>
    </div>
  );
}

export default HistorySample;

/*
NOTE:
Object: history 객체
length: 50, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
action: "PUSH" -
-> router에서 가장 마지막으로 발생한 액션을 알려줌.
-> route path 간 이동은 PUSH, 뒤로가기나 앞으로 가기는 POP
block: ƒ block(prompt)
->사용자의 페이지 이탈 방지
createHref: ƒ createHref(location)
-> location형태의 객체를 가지고 주소를 만드는 역할(별로 안씀)
go: ƒ go(n)
->앞으로 또는 뒤로 이동 -1은 1칸 뒤로, 1은 1칸 앞으로
goBack: ƒ goBack() 
->뒤로가기
goForward: ƒ goForward()
->앞으로 가기
length: 50
->방문기록의 길이 확인
listen: ƒ listen(listener)
->경로에 변동이 생겼을 때 특정 함수를 호출하고 싶은 경우 사용
location: {pathname: "/history", search: "", hash: "", state: undefined, key: "oe7551"}
->현재 자신이 있는 곳. 자신의 경로에 대한 정보
push: ƒ push(path, state)
->특정주소로 이동
replace: ƒ replace(path, state)
->특정주소로 이동하는데 방문기록은 남기지 않음.
__proto__: Object
*/
