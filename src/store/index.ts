import {defineStore} from "pinia";

interface UserInfo {
  username: string
  bio: string
  image: string
  email: string
}

let userinfo: UserInfo = {
  username: '',
  bio: '',
  image: '',
  email: ''
}

let token: string = ''

const localStorageByKey = <E>(key, initialValue: E) => {
  const temp = localStorage.getItem(key);
  let obj = {};
  if (temp === null) {
    localStorage.setItem(key, JSON.stringify(initialValue));
    obj = initialValue;
  } else {
    const local = JSON.parse(temp);
    if (local instanceof Object) {
      obj = local;
    } else {
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


function ref(key, initialValue) { //非object
  const obj = {value: initialValue};
  return localStorageByKey(key, obj);
}


export const useUserStore = defineStore("user", {
  state() {
    return {
      user: localStorageByKey('user', userinfo),
      token: ref('token', token)
    }
  },
  actions: {
    setToken(token: string) {
      this.token.value = token
    },
    setUserInfo(res) {
      ({
        bio: this.user.bio,
        username: this.user.username,
        image: this.user.image,
        email: this.user.email
      } = res)
    }
  }
});

