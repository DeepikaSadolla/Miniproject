import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Side from "./Sidebar"

          

function GroupExample() {
  return (
    <div style={{display:"flex" ,}}>
    <Side/>
    <CardGroup>
       <Card style={{ height: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Java</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Register Course</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={{ height: '20rem',width:'20rem' }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>C</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button variant="primary">Register Course</Button>
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
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button variant="primary">Register Course</Button>
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