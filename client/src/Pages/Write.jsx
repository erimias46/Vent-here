import React, { useState } from 'react'
import {
    Card, CardHeader, Heading, Text, CardFooter, CardBody,
    Button, Editable, EditableTextarea,EditablePreview,EditableInput
} from '@chakra-ui/react';
import { BsFillCursorFill } from "react-icons/bs";

import { useToast } from "@chakra-ui/react";
import axios from 'axios';

const Write = () => {
  const [data, setData] = useState()
  const [title,setTitle]=useState()
    const tags = ['Relationship', 'Family', 'Teens','Sexual','Fantasy']
    const [selected, setSelected] = useState([])
  const toast = useToast();
  


  const handleSubmit = async (e) => {
    try {
        await axios.post("http://localhost:3001/posts", { title: title, body: data,tags:selected });
     }
   
    catch (err) {
      console.log(err)
    }
   };
   
    
    const selecte = (idx) => {
      // Create a new array by filtering out the duplicate value
      let filteredOutput = selected.filter((item) => item !== tags[idx]);
      // Add the value to the new array and update the state
      setSelected([...filteredOutput, tags[idx]]);
    //   setSelected((prev) => [...prev, ]);
      console.log(selected);
    }
  return (
    <div
      style={{
        margin: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Card bg={"Grey-50"}>
        <CardHeader>
          <Editable placeholder="Title">
            <EditablePreview rows={3} cols={150} />
            <EditableInput
              size="lg"
              rows={3}
              cols={150}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Editable>
        </CardHeader>
        <CardBody>
          <Editable placeholder="Write the vent ">
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
        </CardBody>
        <CardFooter flexDirection={"column"}>
          <div>
            <Text size={'small'} color="blue.600">Select a tag</Text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {tags.map((tag, idx) => {
              return (
                <Button
                  bg='blackAlpha.700'
                  flexDirection={"row"}
                  marginLeft={2}
                  key={idx}
                  onClick={() => {
                    selecte(idx);
                  }}
                >
                  {tag}
                </Button>
              );
            })}

            <Button
              bg="red"
              leftIcon={<BsFillCursorFill />}
              variant="solid"
              
              onClick={(e) => {
                toast({
                  title: "Vent been sent.",
                  description: "It will be posted after a review",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                handleSubmit(e);
                
              }}
            >
              Vent
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Write