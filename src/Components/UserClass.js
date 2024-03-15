import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  // whenever we need to use the class component the Props is coming like this
  constructor(props) {
    super(props);
    this.state = {
      userinfo:{
        name:"dummy",
        location:"default",
        avatar_url:"http://dummy-photo.com"
      }
    };
}
   async componentDidMount(){
    //'https://api.github.com/users/USERNAME'
    const data=await fetch("https://api.github.com/users/chandhu005")
    const json=await data.json();
    console.log(json)
    this.setState({
      userinfo:json
    })
  }
   
  render() {
    const {name,avatar_url}=this.state.userinfo;
    return (
      <>
      <main class="p-4">
<div class="p-4 text-center font-semibold text-2xl italic tracking-wide ">
LoggedInUser :
<UserContext.Consumer>
              {({ loggedInUser }) => <span> {loggedInUser} </span>}
            </UserContext.Consumer>
</div>

<main class=" m-6 p-10 rounded-xl bg-purple-50 w-4/5 mx-auto flex justify-between">
<section>
<img src={avatar_url} alt="Github_profile_photo" class="w-40 h-40 rounded-t-full"/>
</section>
<section>
<h2 class="font-semibold text-lg mb-2">Name: {name}</h2>
<h3 class="text-lg font-semibold flex gap-1 mb-3">
<span>LinkedIn : </span>
<span>
<Link to="https://www.linkedin.com/in/chandhu005/" target="_blank">
<img src="https://marvelous-boba-04d9c8.netlify.app/LinkedIn.7a952afb.jpeg" alt="LinkedIn" width="30" height="30"/>
</Link>
</span></h3>
<h3 class="font-semibold text-lg flex gap-2 mb-3">
<span>Github : </span>
<span><Link to="https://github.com/chandhu005" target="_blank"><img src="https://marvelous-boba-04d9c8.netlify.app/Github.0949f713.png" alt="Github" width="30" height="30"/></Link>
</span>
</h3>
<h3 class="text-lg font-semibold">Email:chandrasekharchadalawada7@gmail.com</h3>
</section>
</main>
</main>
  </>
      
    );
  }
}
export default UserClass;
