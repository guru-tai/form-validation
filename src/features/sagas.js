import { all,put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./loginSlice";
// https://drives-stage.thetapacademy.com/api/general/get-active-drives?filters[isTechnical]=true&limit=15&page=1
const credentials = [
  {
    userName: "admin",
    passowrd: "admin123",
    role: "admin",
  },
  {
    userName: "user",
    passowrd: "user123",
    role: "user",
  },
];

function* handleUser(action) {
  const { username, password } = action.payload;
  try {
    const user = credentials.find(
      (cred) => cred.userName === username && cred.passowrd === password
    );
    if (user) {
      yield put(loginSuccess({ role: user.role }));
    } else {
      throw new Error("invalid credentials");
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}
function* watchUsers(){
    yield takeLatest(loginRequest.type,handleUser)
}

export default function* authSaga() {
  yield watchUsers();
}
