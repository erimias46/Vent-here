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
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        {posts.map((post) => {

          const date = new Date(post.date);
          const formattedDate = date.toLocaleString();
          console.log(formattedDate);
          return (
            <Card m={2} bg={"cyan.800"} key={post._id}>
              <CardHeader
                flex={1}
                style={{
                  flex: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Heading size="xl"> {post.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text size="md" color={"white"}>
                  {post.body}
                </Text>
              </CardBody>
              <CardFooter flexDirection={"column"} alignItems={"center"}>
                <Button>Comments</Button>
                <Text fontSize="sm" marginTop={5}>
                  Date : {formattedDate}
                </Text>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default Body