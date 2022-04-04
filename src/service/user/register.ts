import request from "../http"

interface RegInfo {
  email: string,
  username: string,
  verifyCode: string,
  password: string
}

export async function fetchRegister(userInfo: RegInfo) {
  const res = await request.post("/users/register", {
    user: userInfo
  }).catch(err => {
    throw new Error("网络错误")
  })
  const data = res.data
  console.log("注册", data)
  if (data.code === 400) {
    if (data.msg === "duplicated username") {
      throw new Error("用户名重复")
    } else if (data.msg === "duplicated email") {
      throw new Error("邮箱重复")
    }
  } else if (data.code === 201) {
    return "注册成功"
  } else {
    throw new Error("未知错误，请联系管理员")
  }
}
