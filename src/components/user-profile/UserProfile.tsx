import "./UserProfile.css";

function UserProfile() {
  return (
    <section className="user-profile">
      <div className="top">
        <div className="card card--avatar">
          <div className="avatar">
            <img src="src/assets/user.png" alt="User Avatar" />
          </div>
        </div>

        <div className="card card--biography">
          <p className="biography">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>

      <div className="card card--content"></div>
    </section>
  );
}

export default UserProfile;
