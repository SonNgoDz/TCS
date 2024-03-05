// Login.js
import React, { useState } from "react";
import background from "C:/workspace/tcsnew/source/tcs/src/assets/img/login_img/4.png";
import backgroundImage from "C:/workspace/tcsnew/source/tcs/src/assets/img/login_img/bg2.png"; // Update the path accordingly
import logoImage from "C:/workspace/tcsnew/source/tcs/src/assets/img/logo-img1.png";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { unlock } from "react-icons-kit/feather/unlock";

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLogin = () => {
  //   // Xử lý logic đăng nhập ở đây
  //   console.log(
  //     `Đăng nhập với tên đăng nhập: ${username} và mật khẩu: ${password}`
  //   );
  // };

  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [rememberMe, setRememberMe] = useState(false);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center", // Center along the main axis (horizontally)
    alignItems: "center", // Center along the cross axis (vertically)
    width: "100%", // Full width of the window
    minHeight: "100vh", // At least full height of the window
    position: "relative",
    flexDirection: "column",
    wordWrap: "break-word",
    flexWrap: "wrap",
  };

  const rowStyle = {
    "--bs-gutter-x": "1.5rem",
    "--bs-gutter-y": "0",
    display: "flex",
    flexWrap: "wrap",
  };

  const colLg6LeftStyle = {
    flex: "1",
    width: "100%", // Default width for smaller screens

    // Media query for screens with a minimum width of 992px
    "@media (min-width: 992px)": {
      width: "50%",
    },
    borderRight: "1px solid #dee2e6",
    textAlign: "center",
  };

  const colLg6RightStyle = {
    flex: "1",
    width: "100%", // Default width for smaller screens

    // Media query for screens with a minimum width of 992px
    "@media (min-width: 992px)": {
      width: "50%",
    },
  };

  const cardStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundColor: "#fff",
    backgroundClip: "border-box",
    border: "1px solid rgba(0, 0, 0, .125)",
    borderRadius: "0.25rem",
    //border: "0 solid transparent",
    marginBottom: "1.5rem",
    boxShadow:
      "0 2px 6px 0 rgb(161 191 191), 0 2px 6px 0 rgba(161, 191, 191, 0.2)",
  };

  const imgStyle = {
    padding: "5%",
    marginTop: "20%",
    width: "88%",
  };

  const logo = {
    textAlign: "center",
    paddingTop: "3%",
  };

  const loginBody = {
    padding: "1.5rem",
    borderRadius: "0.25rem",
  };

  const centerAlign = {
    textAlign: "center",
  };

  const h2Style = {
    fontFamily: "sans-serif",
    fontSize: "xx-large",
  };

  const inputStyle = {
    display: "block",
    width: "96%",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    borderRadius: "0.25rem",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    marginTop: "3%",
    marginBottom: "4%",
  };

  const inputPassStyle = {
    width: "96%",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    borderRadius: "0.25rem",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    marginTop: "3%",
    marginBottom: "4%",
  };

  const inputGroup = {
    alignItems: "center",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#212529",
    textAlign: "center",
    whiteSpace: "nowrap", // Corrected: Use camelCase for 'white-space'
    border: "1px solid #ced4da",
    borderRadius: "0.25rem",
    backgroundColor: "transparent",
    borderStyle: "none",
  };

  const buttonStyle = {
    display: "inline-block",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#fff",
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    userSelect: "none",
    backgroundColor: "#6c757d",
    border: "1px solid transparent",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    borderRadius: "0.25rem",
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    borderColor: "#6c757d",
    width: "100%",
  };

  const unlockIconStyle = {
    marginRight: "0.5rem",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={rowStyle}>
          <div style={colLg6LeftStyle}>
            <img
              src={backgroundImage}
              className="card-img login-img"
              alt="..."
              style={imgStyle}
            />
          </div>
          <div style={colLg6RightStyle}>
            <div style={logo}>
              <img src={logoImage} width="120" alt="" />
            </div>
            <div style={loginBody}>
              <div style={centerAlign}>
                <h2 style={h2Style}>Đăng nhập</h2>
              </div>
              <div>
                <form action="">
                  <div>
                    <label
                      htmlFor="inputEmailAddress"
                      style={{
                        fontStyle: "italic",
                        fontSize: "larger",
                        paddingBottom: "1%",
                      }}
                    >
                      Tên đăng nhập
                    </label>
                    <input
                      type="text"
                      id="inputAddress"
                      placeholder="Tên đăng nhập"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inputEmailAddress"
                      style={{
                        fontStyle: "italic",
                        fontSize: "larger",
                        paddingBottom: "1%",
                      }}
                    >
                      Mật khẩu
                    </label>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        width: "100%",
                      }}
                    >
                      <input
                        type={type}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        style={inputPassStyle}
                      />
                      <span
                        style={{
                          ...inputGroup,
                          position: "absolute",
                          right: "0",
                          top: "46%",
                          transform: "translateY(-50%)",
                        }}
                        onClick={handleToggle}
                      >
                        <Icon
                          className="absolute mr-10"
                          icon={icon}
                          style={{ width: "69%" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleRememberMe}
                      />
                      &nbsp;Nhớ mật khẩu
                    </label>
                  </div>
                  <div style={{ paddingTop: "5%" }}>
                    <button type="submit" style={buttonStyle}>
                      <Icon icon={unlock} size={20} style={unlockIconStyle} />
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
