import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'react-apollo';

import * as actionCreators from "../../actions";
import {Column} from "../common-style";
import {Button} from "../button";
import {Header} from "../header";
import {RoomBooking} from "../room-booking/room-booking";

const HomePage = ({roomList, eventList, date, onCreateButtonClick, onDateChange}) => (
    <Column>
        <Header>
            <Link to="create">
                <Button primary>Создать встречу</Button>
            </Link>
        </Header>
        <RoomBooking
            rooms={roomList}
            events={eventList}
            date={date}
            onDateChange={onDateChange}
        />
    </Column>
);

const HomePageWithData = compose(
    actionCreators.getRoomList,
    actionCreators.getEventList
)(HomePage);

const mapStateToProps = (store) => ({
    date: store.date
});

const mapDispatchToProps = (dispatch) => ({
    onDateChange: (date) => dispatch(actionCreators.setDate(date))
});

export const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageWithData);
