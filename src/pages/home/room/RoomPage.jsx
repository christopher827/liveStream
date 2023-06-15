import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import {useParams} from "react-router-dom"

function RoomPage() {
const {roomId}=useParams()
const myMeeting=(element)=>{
const appId=841465846
const serverSecret="6f4565c7128096310e2ffda926d50399"
const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(
  appId,
  serverSecret,
  roomId,
  Date.now().toString(),  'Chris',
  )

  const zp=ZegoUIKitPrebuilt.create(kitToken);
zp.joinRoom({ 
  container:element,
  scenario:{
    mode:ZegoUIKitPrebuilt.VideoConference, 
  }
})};

  return (
    <div className='room-page'>

<div ref={myMeeting}/>
  </div>
  )
}

export default RoomPage