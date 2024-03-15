// how to write an test case 
//test("string ",Call back Function )
import { sum } from "../sum"
test("sum function should calculate the Sum of two number",()=>{
   const result= sum(3,6)
   //Assertion 
   expect(result).toBe(9);
})