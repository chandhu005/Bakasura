import {fireEvent, render,screen} from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
test("should render Header Component with a login button",()=>{
render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    
);
    const loginbtn=screen.getByRole("button",{name:"Login"});
    //const loginbtn=screen.getByText("Login")
    expect(loginbtn).toBeInTheDocument();
});

test("should render Header COmponents with a Cart Items 0 or not",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
        
    );
        const cartItems=screen.getByText("0");
        //const loginbtn=screen.getByText("Login")
        expect(cartItems).toBeInTheDocument();
    });
test("should Change Login Button to Logout onCLick",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>
            
        );
            const loginbtn=screen.getByRole("button",{name:"Login"});
            fireEvent.click(loginbtn);
            //const loginbtn=screen.getByText("Login")
            const logoutbtn=screen.getByRole("button",{name:"Logout"})
            expect(logoutbtn).toBeInTheDocument();
        });

    