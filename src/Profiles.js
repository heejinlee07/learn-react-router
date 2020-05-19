import React from "react";
import Profile from "./Profile";
import { Link, Route } from "react-router-dom";

/**
 * NOTE:
 * 서브 라우트 라우트 내부에 라우트를 만드는 것을 의미.
 * 컴포넌트를 만들어서 그 안에 또 Route 컴포넌트를 렌더링한다.
 * 특정 경로에 tab이 있는 경우 서브 라우트를 사용하면 편하다.
 */

function Profiles() {
  return (
    <div>
      <h3>유저 목록</h3>
      <ul>
        <li>
          <Link to="/profiles/hello">hello</Link>
        </li>
        <li>
          <Link to="/profiles/bye">bye</Link>
          {/* DEBUG: Link 설정 시 맨 처음에 '/' 반드시 사용할 것. */}
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요.</div>} />
      {/* render를 사용하면 특정 컴포넌트가 아니라 함수를 사용할 수 있다. */}
      {/* render를 사용하면 위에 선언된 변수가 있을 때 render에서 바로 가져와서 사용할 수 있다. */}
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
