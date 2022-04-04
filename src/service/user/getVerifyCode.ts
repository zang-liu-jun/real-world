import request from "../http"

export async function getVerifyCode(email:string){
  const res=await request.get("/email",{
    params:{
      email
    }
  }).catch(err=>{
    throw new Error("网络错误，请检查网络设置")
  })
  const data=res.data
  console.log("获取验证码",data)
  if(data.code!==200){
    throw new Error(data.msg)
  }
}
