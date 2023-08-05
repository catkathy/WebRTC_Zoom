import React, { useEffect } from "react";
import logo from "../resources/images/logo.png";
import ConnectingButtons from "./ConnectingButtons";
import { connect } from "react-redux";
import "./IntroductionPage.css";
import { setIsRoomHost } from "../store/actions";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, []);
  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image" alt="logo"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (IsRoomHost) => dispatch(setIsRoomHost(IsRoomHost)),
  };
};
export default connect(null, mapActionsToProps)(IntroductionPage);
