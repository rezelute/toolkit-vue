import { defineStore } from "pinia"
import { ref } from "vue"

const useUserStore = defineStore("userStore", () => {
   const isSignedIn = ref(false)

   function updateAuth(doesSessionExist: boolean) {
      isSignedIn.value = doesSessionExist
   }

   return {
      isSignedIn,
      updateAuth,
   }
})

export { useUserStore }
