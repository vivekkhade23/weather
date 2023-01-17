import { Box, Button, FormControl, FormLabel, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logoutuser, updateUSer } from '../Redux/signup/actions';
import { store } from '../Redux/store';

const Userprofile = () => {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch()
const {isAuth}=useSelector((store)=>store.isAuth)


    let user = useSelector((store) => store.user)

    const { isOpen, onOpen, onClose } = useDisclosure()



    let follower = Math.floor(Math.random() * 500);
    let following = Math.floor(Math.random() * 500);

    const Editprofile =  () => {
        let data = {
            fullname: fullname,
            email: email,
            password: password,
            id: user.id,
            username: user.username,
            image: user.image,
        }

     fetch(`https://tweeter-fly0.onrender.com/user/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json())
        


        dispatch(updateUSer(data))

    }

    const DeleteAccount =  () => {
         fetch(`https://tweeter-fly0.onrender.com/user/${user.id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        alert("     user deleted...    ")
        navigate("/signup");

    }

    function LOGOUTUSER(){
        dispatch(Logoutuser())
        navigate("/signin")
    }
    

if(isAuth===false){
 return   navigate("/signin")
}



    return (
        <Box>
              <Button onClick={LOGOUTUSER}>LOGOUT</Button>
            <VStack>
                <Image src={user.image} alt="image" />
                <Text>@{user.username}</Text>
                <Text>{user.fullname}</Text>
                <Text>{user.email}</Text>
                <HStack>
                    <Text>{follower}<span> Follower</span></Text>
                    <Text>{following}<span> Following</span></Text>

                </HStack>

                <HStack>
                    <>
                        <Button onClick={onOpen}>Edit Profile</Button>

                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Edit your account</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Full name</FormLabel>
                                        <Input onChange={(e) => setFullname(e.target.value)} placeholder='Full name' />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Email</FormLabel>
                                        <Input onChange={(e) => setEmail(e.target.value)} placeholder='Email ' />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <Input onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                    </FormControl>


                                </ModalBody>

                                <ModalFooter>
                                    <Button onClick={Editprofile} colorScheme='blue' mr={3}>
                                        Edit Profile
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>

                    <Button onClick={DeleteAccount}>Delete Account</Button>


                </HStack>


            </VStack>

          
        </Box>
    )
}

export default Userprofile