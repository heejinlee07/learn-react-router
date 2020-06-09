import React from "react";
import { withRouter } from "react-router-dom";

/**
 * NOTE:
 * withRouter
 * 하나의 함수. 리우터 컴포넌트가 아닌 곳에서
 * match, location, history를 props로 받아와서 사용할 수 있다.
 */

function WithRouterSample({ location, match, history }) {
  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      {/* JSON.stringify: 객체를 문자열로 변환. null, 2는 들여쓰기를 해줌*/}
      <h4>match</h4>
      <textarea value={JSON.stringify(match, null, 2)} readOnly />
      <button onClick={() => history.push("/")}>홈으로</button>
    </div>
  );
}

//컴포넌트를 내보내기 전에 사용
export default withRouter(WithRouterSample);

/**
 * match: 현재 컴포넌트가 렌더링된 위치를 기준으로 정보를(match를) 읽어온다.
 * location: 어디에서 불러오든 똑같은 정보를 가리키고 있다.
 *
 * 라우트로 사용되지 않은 컴포넌트에서 조건부로 이동을 할 때 자주 사용.
 * ex) 로그인 성공시 특정경로로 이동, 실패시 가만히 있고 싶다. 이런 조건 사용시
 */
