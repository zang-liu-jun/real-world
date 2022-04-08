import request from "../http"

export async function getAllTags() {
  const res=await request.get("/tags").catch(()=>{
    throw new Error("网络错误")
  })
  const data=res?.data
  console.log("获取全部标签",data)
  if(data.code!==200){
    throw new Error("未知错误")
  }else{
    return data.data
  }
}
