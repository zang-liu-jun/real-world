import { defineStore } from "pinia";

interface User {
  bio:string,
  email:string,
  image:string,
  username:string
}

let user:User={
  bio:'',
  email:'',
  image:'',
  username:''
}

export const useUserStore = defineStore("user", {
  state() {
    return {
      user
    };
  },
});
