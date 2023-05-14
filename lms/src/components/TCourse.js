import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Side from "./Sidebar"
import {Link }from "react-router-dom"

          

function GroupExample() {
  return (
    <div style={{display:"flex" ,}}>
    <Side/>
    <CardGroup style={{display:"flex" ,margin:"100px"}}>
       <Card style={{ height: '20rem' }}>
        <Card.Img variant="top" src="images/java.jpg" />
        <Card.Body>
          <Card.Title>Java</Card.Title>
          <Card.Text>
           
          </Card.Text>
          <Link to="/uploader"><Button variant="primary">Add Material</Button></Link>  
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{ height: '20rem',width:'20rem' }}>
        <Card.Img variant="top" src="images/c.png" />
        <Card.Body>
          <Card.Title>C</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary">Add Material</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{ height: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Python</Card.Title>
          <Card.Text
          >
          </Card.Text>
          <Button variant="primary">Add Material</Button>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>

        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;