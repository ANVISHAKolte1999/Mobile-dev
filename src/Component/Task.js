import React, { useEffect,useState } from 'react';
import axios from "axios";
import { CardColumns,Card } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Task = () => {
    const [users,setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await axios.get("http://localhost:3000/posts");
        setPosts(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        loadPosts();
    };

    return (
        <div className="container">
            <div className="py-4">
                <h1> Jokes</h1>
                
                <CardColumns>
   {users.map((user, index) => (
    <Card >
      <Card.Body>
      <Card.Text variant="h5" component="h2">
        <td><Card.Header>{user.id}</Card.Header></td>
        </Card.Text>

        <Card.Text variant="body2" component="p">
        <td><i>{user.type}</i></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><td><i>{user.setup}</i></td></td>
        </Card.Text>
        <Card.Text variant="body2" component="p">
        <td><td><td><i>{user.punchline}</i></td></td></td>
        
        </Card.Text>
        </Card.Body>
        </Card>
         /* {
         
         
          }*/
        
       ))
   }
   </CardColumns>
  
            </div>
        </div>
    );
};

export default Task;

    
