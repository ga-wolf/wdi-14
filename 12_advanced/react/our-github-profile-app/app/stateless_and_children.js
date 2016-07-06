// https://api.github.com/users/ga-wolf
const USER_DATA = {
  imageURL: "https://avatars.githubusercontent.com/u/4362970?v=3",
  username: "ga-wolf",
  name: "Wolf"
};

// Stateless Functional Component
const ProfilePic = (props) => {
  return ( <img src={props.imageURL} style={{ width: "100px" }} /> );
};
const ProfileName = (props) => {
  return ( <h3><em>{props.name}</em></h3> );
};
const ProfileLink = (props) => {
  return (
    <div>
      <a href={`https://github.com/${props.username}`} target="_blank">
        {props.username}
      </a>
    </div>
  );
};

class Paragraph extends Component {
  render() {
    return ( <p>{this.props.children}</p> );
  }
};

const Avatar = (props) => {
  return (
    <div>
      <ProfilePic imageURL={props.user.imageURL} />
      <ProfileName name={props.user.name} />
      <ProfileLink username={props.user.username} />
      <Paragraph>
        Some custom text goes here
      </Paragraph>
    </div>
  );
};

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById("app")
);
