import React from "react";
import qs from "qs";

/**
 * NOTE:
 * 쿼리. props로 location을 받아와서 조회
 * 쿼리는 라우트 컴포넌트에게 props 전달되는 location 객체에 있는 search 값에서 읽어올 수 있다.
 * location 객체는 현재 앱이 갖고있는 주소에 대한 정보를 지니고 있다.
 * search값을 확인해야 하는데 이 값은 문자열이므로, 객체 형태로 파싱 필요.
 * qs로 파싱한다. ignoreQueryPrefix를 따로 설정하지 않으면 물음표까지 파싱된다.
 */
function About({ location }) {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true";
  // 값을 불러올 때 해당값이 문자열로 읽어지므로 문자열을 사용하여 비교.
  // detail값이 true일 때 const detail이 true가 된다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail 값이 true입니다.</p>}
    </div>
  );
}

export default About;

/*
REMIND: url 파라미터, 쿼리든 어떤 것으로 값을 읽든 그 값은 '문자열'이다.
반드시 문자열로 비교. 만약 숫자를 받아온다면
parseInt(query.id, 10) -> 이런식으로 문자열을 숫자로 변환해서 사용한다.
*/
