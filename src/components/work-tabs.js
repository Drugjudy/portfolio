import { Card,CardGroup,ListGroup,ListGroupItem,Badge } from "react-bootstrap"
import "../css/card.css";


function WorkTab() {
    return(
        <CardGroup>
            <div className="card-work">
        <Card className="color-match">
  <Card.Img variant="top" src={require('../images/1.jpg')} />
  <Card.Body>
    <Card.Title >Drug Basket</Card.Title>
    <Card.Text>
      small e-commerce website to buy fruits with weed :O
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="color-match">
      <Badge pill bg="info">REACT</Badge>
  <Badge pill bg="info">
    BOOTSTRAP
  </Badge>
  <Badge pill bg="info">
    CSS3
  </Badge>
    </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://drugbasket.netlify.app/">Visit</Card.Link>
    <Card.Link href="https://github.com/Drugjudy/Basket-webite">Code</Card.Link>
  </Card.Body>
</Card > </div>
<div className="card-work">
     <Card  className="color-match">
  <Card.Img variant="top" src={require('../images/2.jpg')} />
  <Card.Body>
    <Card.Title >Illusion quiz</Card.Title>
    <Card.Text>
      A simple quiz game with tricky questions
    </Card.Text>
  </Card.Body >
  <ListGroup className="list-group-flush">
    <ListGroupItem className="color-match">    <Badge pill bg="info">REACT</Badge>
  <Badge pill bg="info"> CSS3
  </Badge></ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://weirdbox.netlify.app/">Visit</Card.Link>
    <Card.Link href="https://github.com/Drugjudy/easy-react-website">Code</Card.Link>
  </Card.Body>
</Card> </div>
 <div className="card-work">
     <Card className="color-match">
  <Card.Img variant="top" src={require('../images/3.jpg')} />
  <Card.Body>
    <Card.Title >Bday List</Card.Title>
    <Card.Text>
      My first ever project with a simple design
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="color-match">
          <Badge pill bg="info">Javascript</Badge>
  <Badge pill bg="info"> CSS3
  </Badge>
    </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://bruhapp.netlify.app/">Visit</Card.Link>
  </Card.Body> 
</Card> </div>
</CardGroup> 
    )
}

export default WorkTab;