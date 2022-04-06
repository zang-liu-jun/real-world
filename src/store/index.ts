import {defineStore} from "pinia";

interface User {
  bio: string,
  email: string,
  image: string,
  username: string
}

let user: User = {
  bio: '',
  email: '',
  image: '',
  username: ''
}

let token: string = ""


const localStorageByKey = <E>(key, initialValue: E) => {
  const temp = localStorage.getItem(key);
  let obj = {};
  if(temp === null){
    localStorage.setItem(key,JSON.stringify(initialValue));
    obj = initialValue;
  }else {
    const local = JSON.parse(temp);
    if(local instanceof Object){
      obj = local;
    }else {
      obj = initialValue;
    }
  }


  const proxyObj = new Proxy(obj, {
    set(target: E, p: string | symbol, value: any): boolean {
      target[p] = value;
      localStorage.setItem(key, JSON.stringify(target));
      return true;
    },
    get(target: E, p: string | symbol): any {
      return target[p];
    }

  })
  return proxyObj as E;
}



export const useUserStore =  defineStore("user", {
  state() {
    return localStorageByKey('user',{user,token})
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: User) {
      ({
        bio: this.user.bio,
        email: this.user.email,
        image: this.user.image,
        username: this.user.username
      } = userInfo)
      // this.user.bio = userInfo.bio
    }
  }
});
