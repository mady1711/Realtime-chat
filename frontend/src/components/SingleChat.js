import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Box , Text} from '@chakra-ui/react';
import {IconButton} from '@chakra-ui/button'
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getSender, getSenderFull } from '../config/ChatLogics'
import ProfileModal from './miscellaneous/ProfileModal';
import UpdateGroupChatModal from './miscellaneous/UpdateGroupChatModal';

const SingleChat = ({fetchAgain ,setFetchAgain}) => {

    const {user,selectedChat,setSelectedChat} = ChatState();
  return (
    <>
        {selectedChat ?(
            <>
            <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            >
                <IconButton
                d={{ base: "flex", md: "none" }}
                icon={<ArrowBackIcon />}
                onClick={() => setSelectedChat("")}
                />
                {!selectedChat.isGroupChat ? (
                    <>
                        { getSender(user,selectedChat.users) }
                        <ProfileModal user={ getSenderFull(user,selectedChat.users) } />
                    </>
                ) : (
                        <>
                            { selectedChat.chatName.toUpperCase() }
                            <UpdateGroupChatModal 
                                fetchAgain = { fetchAgain }
                                setFetchAgain = { setFetchAgain }
                            />
                        </>                    
                )}
            </Text>
            <Box
                display="flex"
                flexDir="column"
                justifyContent="flex-end"
                p={3}
                bg="#E8E8E8"
                width="100%"
                height="100%"
                borderRadius="lg"
                overflowY="hidden"
            >

                {/* Message Here  */}
            </Box>
            
            </>
        ) :(
            <Box display="flex" alignItems="center" justifyContent="center" height='100%'>
                <Text fontSize="3x1" pb={3} fontFamily="Work sans">
                    Click on a user to start chatting 
                </Text>
            </Box>
        )}
    </>
  )
}

export default SingleChat