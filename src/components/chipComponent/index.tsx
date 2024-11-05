import { Container, Title } from "./styles";
    const items = [
    {name:"Tudo", primeiroItem: true} , 
    {name:"Jogos"} , 
    {name:"Música"} , 
    {name:"Podcast"} , 
    {name:"Ficção"} , 
    {name:"Notícias"} , 
    {name:"Rock"} ,
    {name: "Angra"},
    {name: "Edu"},
    {name: "Metal"},
    {name: "Você"},


]




function Chips(){
    

    return(
        <Container style={{ marginTop: '-45px' }}>
            {items.map((item) =>(
                 
                <Title
                    style={{
                        backgroundColor: item.primeiroItem ? "black" : "#dbdbdb", 
                        color: item.primeiroItem ? "white" : "#212121"
                    }}
                >
                    
                    <span>{item.name}</span> 
                </Title>    
                  
            ))}

        </Container>
    )

}

export default Chips;