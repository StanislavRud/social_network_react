import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";



export default connect(mapStateToProps, mapDispatchToProps)(Users);
