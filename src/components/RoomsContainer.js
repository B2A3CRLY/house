import React from 'react'
import RoomsList from '../components/RoomsList'
import RoomsFilter from '../components/RoomsFilter'
import { RoomConsumer } from '../context'
import Loading from './Loading'
export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {value => {
                const { loading, sortedRooms, rooms } = value
                if (loading) {
                    return <Loading/>
                }
                return (
                    <div>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                )
           }}
        </RoomConsumer>
    )
}
