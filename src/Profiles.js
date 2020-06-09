import React from "react";
import Profile from "./Profile";
import { NavLink, Route } from "react-router-dom";
import WithRouterSample from "./WithRouterSample";
import RouterHookSample from "./RouterHookSample";

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
          {/* activeStyle이 아닌 클래스네임을 주고 싶다면 activeClassName으로 사용. 
          어떤 함수가 true를 반환하면 특정스타일을 주고싶다면 아래와 같이 사용.
          -> isActive={(match,location) =>{return match.params.blbla='asdf'}}
          */}
          <NavLink to="/profiles/hello" activeStyle={{ background: "black", color: "white" }}>
            hello
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/bye" activeStyle={{ background: "black", color: "white" }}>
            bye
          </NavLink>
          {/* DEBUG: Link 설정 시 맨 처음에 '/' 반드시 사용할 것. */}
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요.</div>} />
      {/* render를 사용하면 특정 컴포넌트가 아니라 함수를 사용할 수 있다. */}
      {/* render를 사용하면 위에 선언된 변수가 있을 때 render에서 바로 가져와서 사용할 수 있다. */}
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
      <RouterHookSample />
    </div>
  );
}

export default Profiles;
