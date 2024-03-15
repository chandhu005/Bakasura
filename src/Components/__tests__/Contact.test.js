import Contact from "../Contact";
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"
describe('COntact us page testcases', () => { 
    test("Contact page should render correctly",()=>{
        render(<Contact/>)
        const heading=screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument();
    });
    
    test("should load button the in the Contact button",()=>{
        render(<Contact/>)
        const button=screen.getByText("Submit")// one way to get the button 
    
        expect(button).toBeInTheDocument();
    });
    test("should load input",()=>{
        render(<Contact/>)
        const input=screen.getByPlaceholderText("name")
        expect(input).toBeInTheDocument();
    });
    
    test("should load 2 input boxes",()=>{
        render(<Contact/>)
        const inputboxes=screen.getAllByRole("textbox");// get all so it will get the array 
       // console.log(inputboxes);// it will print all the virtual dom 
    
        expect(inputboxes.length).toBe(2);
    }) })
