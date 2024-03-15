import React from "react";
import UserClass from "./UserClass";
//import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(" parennt Constractor");
    this.state = {
      userinfo: {
        name: "dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {}
  render() {
    return (
      <>
        <UserClass name={"1st child"} location={"tirupathi"} />
      </>
    );
  }
}
/*
-Parent Constroctor
-Parent Render
-Chandhu COnstructor
-Chandhu REnder
-chandhu component did mount
-chitti constructor
-chitti render
-chitti componentDidMount
-parent mounted 

*/
// const About=()=>{
//     return(
//         <>
//         <h1>This is namestha React</h1>
//         <UserClass name={"Chandhu😍"} location={"tirupathi"}/>
//         <User name={"Chitti❤️"} location={"tirupathi"}/>
//         </>
//     )
// }

/*
  {####### MOUNTING CYCLE ###########}
 * constructor is called
 * state variable is updated with dummy data
 * render happens with default value<HTML WIth DUMMY DATA />
 * react update with dummy data
 * component Did mounted the Api is called
 * 
 * {UPDATE CYCLE}
 * This.set state => update the data (State variable is updated )
 * render(API DATA )
 * component Did update
 * 
 */
export default About;
