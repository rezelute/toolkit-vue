import { describe, expect, it } from "vitest"
import UserAccountInfo from "./UserAccountInfo.vue"

describe("UserAccountInfo", () => {
   it("should mount without errors", () => {
      expect(UserAccountInfo).toBeTruthy()
   })
})
