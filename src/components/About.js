import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor")
  }
  componentDidMount() {
    // console.log("parent component did mount")
  }
  render() {
    // console.log("parent render")
    return (
      <div>
        <h1 className="font-semibold text-4xl text-center w-full p-4">
          About{" "}
        </h1>
        <UserClass />
        <div className="bg-slate-200 text-center font-medium text-lg p-2 shadow-md m-4">
          User Info

          <ul>
            <UserContext.Consumer>
              {(data) => {
                console.log(data);
                return <li className="m-2">UserName:{data.loggedInUser}</li>;
              }}
            </UserContext.Consumer>
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
