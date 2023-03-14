import React, { useEffect,useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import axios from 'axios';
import { Grid, GridItem ,Heading,SimpleGrid,Button} from "@chakra-ui/react";



const Body = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setPosts(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
        
    },[setPosts])
  return (
    <div>
      
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {posts.map((post) => {

          return (
            <Card bg={'Grey-50'} key={post._id}>
            <CardHeader>
              <Heading size="md"> Title</Heading>
            </CardHeader>
            <CardBody>
              <Text>{post.body}</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>)
          
       
         
       })}
        
        
      </SimpleGrid>
    </div>
  );
}

export default Body