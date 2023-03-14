import React, { useState } from 'react'

 import {
   Editable,
   EditableInput,
   EditableTextarea,
    EditablePreview,
   Button, ButtonGroup 
} from "@chakra-ui/react";
import { BsFillCursorFill } from "react-icons/bs";
import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import axios from "axios"




 
const Footer = () => {
    const [data, setData] = useState('');
   

    const handleSubmit = (e) => {
     
        axios.post("http://localhost:3001/posts", { body: data })
        
          
    };
  return (
    <div>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        position="fixed"
        bottom={0}
      >
        <Editable placeholder="Write your vent here">
          <EditablePreview rows={3} cols={150} />
          <EditableTextarea
            size="lg"
            rows={3}
            cols={150}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
        </Editable>

        <Spacer />
        <ButtonGroup gap="1">
          <Button
            leftIcon={<BsFillCursorFill />}
            variant="solid"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Send
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
}

export default Footer