import React,{useState} from 'react'
import Select from 'react-select';
import {Row,Col,Container} from 'react-bootstrap';

function Dropdown()
{
    var countrylist = [
   
    ];
    const [result,ddlvalue]=useState(countrylist.label);
    const ddlHandler = e =>
    {
        ddlvalue(e.label);
    }

    return(
        <div>
               <Container>
  <Row xs={2} md={4} lg={6}>
    <Col></Col>
    
  </Row>
  </Container> 
                
                <center>

                <Container>
  <Row>
    <Col><h1> Welcome</h1></Col>
  </Row>
</Container>

 
                    
                </center>
        </div>
    )
}

export default Dropdown