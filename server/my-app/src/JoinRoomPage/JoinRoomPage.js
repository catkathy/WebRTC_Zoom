import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import "./JoinRoomPage.css";
import { setIsRoomHost } from "../store/actions";

const JoinRoomPage = (props) => {
  const { setIsRoomHostAction } = props;

  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      //seeting in our redux store that user is host
      setIsRoomHostAction(true);
    }
  }, []);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel"></div>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);
