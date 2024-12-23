import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      email: "",
      avatar_url: "",
      node_id: " ",
      login: " ",
      id: " ",
    };
    // console.log("child constructor")
  }
  componentDidUpdate() {
    // console.log("component did update ")
  }
  async componentDidMount() {
    // console.log(this.props.name+" component did mount")

    const data = await fetch("https://api.github.com/users/SIMRAN5-CS");
    const json = await data.json();
    // console.log(json.node_id)
    this.setState({
      name: json.name,
      location: json.location,
      email: json.email,
      avatar_url: json.avatar_url,
      node_id: json.node_id,
      login: json.login,
      id: json.id,
    });
  }
  componentWillUnmount() {
    // console.log("component unmount")
  }

  render() {
    // console.log("child render")
    const { name, login, id, avatar_url, node_id, email, location } =
      this.state;
    return (
      <div className="bg-slate-200 text-center font-medium text-lg p-2 shadow-md">
        Creator info
        <div className="  flex justify-evenly ">
          <img
            className="rounded-full border-2 border-black w-[200] h-[200]"
            src={avatar_url}
          ></img>
          <ul className=" text-left  ">
            <li className="p-2">
              Name:  { name}
            </li>
            <li className="p-2">
              GitHub Id:  
              {id}
            </li>
            <li className="p-2">
              GitHub UserName:
              {login}
            </li>
            <li className="p-2">
              nodeid: 
              { node_id}
            </li>
          </ul>
        </div>

      </div>
    );
  }
}
export default UserClass;
