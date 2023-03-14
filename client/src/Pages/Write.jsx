import React, { useState } from 'react'
import {
    Card, CardHeader, Heading, Text, CardFooter, CardBody,
    Button, Editable, EditableTextarea,EditablePreview,EditableInput
} from '@chakra-ui/react';

const Write = () => {
    const [data, setData] = useState()
    const tags = ['relationship', 'family', 'teens']
    const [selected, setSelected] = useState([])
   
    
    const selecte = (idx) => {
      // Create a new array by filtering out the duplicate value
      let filteredOutput = selected.filter((item) => item !== tags[idx]);
      // Add the value to the new array and update the state
      setSelected([...filteredOutput, tags[idx]]);
    //   setSelected((prev) => [...prev, ]);
      console.log(selected);
    }
  return (
    <div>
      <Card bg={"Grey-50"}>
        <CardHeader>
          <Editable placeholder="Title">
            <EditablePreview rows={3} cols={150} />
            <EditableInput
              size="lg"
              rows={3}
              cols={150}
              onChange={(e) => {
                setData(e.target.value);
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
              <CardFooter>{
                  tags.map((tag,idx) => {
                      return (<Button key={idx} onClick={() => { selecte(idx) }}>{tag}</Button>)
              })}
                
          <Button>Vent</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Write