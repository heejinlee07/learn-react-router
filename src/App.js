import React from "react";
import { Route, Link, Switch } from "react-router-dom";
//route의 역할: 특정 주소에 특정 컴포넌트를 보여주겠다.
//link: 특정경로로 가기 위해 사용.
//REMIND: <a>태그는 절대 사용금지. 새로 페이지를 불러오게 됨. (새로운 요청을 하게됨.)
import Home from "./Home";
import About from "./About";
// import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        {/* 특정 주소에 컴포넌트 연결: <Route path="주소규칙" component={보여주고싶은 컴포넌트}> */}
        <Route path="/" component={Home} exact />
        {/* exact : (exact=true)이 경로와 완전히 일치하는 것만 보여주겠다. */}
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        {/* <Route path="/profile/:username" component={Profile} /> */}
        {/* :username -> url파라미터로, profile에서 받아서 쓸 수 있음. */}
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.name}</p>
            </div>
          )}
        />
        {/* switch는 매칭되는 가장 첫번째 것만 보여줌. 
        아무것도 찾지 못하면 맨 아래로 내려가서 렌더링됨*/}
      </Switch>
    </div>
  );
}

export default App;

/*
NOTE:
파라미터와 쿼리
주소를 통해서 어떤 동적인 값을 읽어와야 할 때 사용
파라미터: /profiles/velopert
-> 특정 id 나 이름을 가지고 조회를 할 때 사용
쿼리: /about?details=true, /filter?type=book&sort_by=date
쿼리스트링: domain?key=value로 구성
-> 어떤 키워드를 검색하거나, 요청을 할 때 필요한 옵션을 전달 할 때 사용
*/

/**
 * Switch
 * 여러 라우트 중 가장 먼저 매칭된 라우트 하나만 보여줌.
 * 여러 Route 들을 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링시켜줌.
 * Switch 를 사용하면, 아무것도 일치하지 않았을 때 보여줄
 * Not Found 페이지를 구현 할 수 있다.
 */

/**
 * NavLink
 * 현재 주소와 일치한다면 스타일 바꾸기
 */
