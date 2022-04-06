import request from "../http"

interface LoginInfo {
  email:string,
  password:string
}
export async function fetchLogin(user:LoginInfo){
  const res=await request.post("/users/login",{
    user
  }).catch(err=>{
    throw new Error("网络错误")
  })
  const data=res.data
  console.log("登录",data)
  if(data?.code===200){
    return data.data
  }else {
    throw new Error("登录失败，邮箱或密码错误")
  }
}
