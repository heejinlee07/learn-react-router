import React from "react";

const profileDate = {
  hello: {
    name: "이희진",
    description: "Frontend Engineer",
  },
  bye: {
    name: "울라프",
    description: "Frozen character",
  },
};
// Profile에서 url 파라미터를 조회
// 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조.
// {match}라는 값은 route 컴포넌트에서 넣어주는 props로 따로 설정할 필요없음.
// 해당컴포넌트를 route로 사용하면 자동으로 받아와진다.
function Profile({ match }) {
  const { username } = match.params;
  // route 컴포넌트의 match안에 params 라는 값이
  // <Route path="/profile/:username" component={Profile} /> 이런 형태로 있고,
  // 이 안에 url 파라미터(:username)이 들어있어서 따로 추출해서 조회가능.
  const profile = profileDate[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
