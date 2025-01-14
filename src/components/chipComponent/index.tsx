import { useRef, useState } from "react";
import { useAppContext } from "../../contexts/menuContext";
import { useCategoryContext } from "../../contexts/seachCategories";
import { Container,Button,Slider,SliderContent,SliderButtons,ButtonIcon } from "./styles";
import BackIcon from "../../assets/back-button.png";
import NextIcon from "../../assets/next-button.png";



function Chips() {

    const { openMenu } = useAppContext();
    console.log(openMenu);

    const { setCategoryId } = useCategoryContext();

    const [activeCategory, setActiveCategory] = useState<string>("0");
    const sliderRef = useRef<HTMLDivElement>(null);

    const CategoryButtons = [

    {name: 'Tudo', id: '0'},
    {name: 'Games', id: '20'},
    {name: 'Futebol', id: '17'},
    {name: 'Entretenimento', id: '24'},
    {name: 'Música', id: '10'},
    {name: 'Pessoas e blogs', id: '22'},
    {name: 'Automóveis e veículos', id: '2'},
    {name: 'Animais e pets', id: '15'},
    {name: 'Notícias e política', id: '25'},
    {name: 'Comédia', id: '23'},
    {name: 'Shorts', id: '26'},
    {name: 'Infantil', id: '1'},
    {name: 'Vida a dois', id: '22'},
    {name: 'Esportes', id: '17'},
    {name: 'Memes', id: '23'},
    {name: 'Jogos pc', id: '20'},
    {name: 'Jornais', id: '25'},
    {name: 'Kids', id: '1'},
    {name: 'Hits do momento', id: '10'},
    {name: 'História das civilizações', id: '22'},
    {name: 'Ciências', id: '15'},
    {name: 'Viagens pelo mundo', id: '24'},
    {name: 'Séries', id: '23'},
    {name: 'Novidades', id: '24'},
    {name: 'Educação', id: '1'}, 
    {name: 'Ciência e tecnologia', id: '2'}, 
    {name: 'Documentários', id: '26'}, 
    {name: 'Economia', id: '25'}, 
    {name: 'Investimentos e finanças', id: '20'}, 
    {name: 'Moda e estilo', id: '23'},
    {name: 'Comunicação', id: '10'},
    {name: 'Beleza', id: '24'},
    ];

    const handleCategoryClick = (id: string) => {
        setCategoryId(id);
        setActiveCategory(id);
    };

    const nextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 200, behavior: "smooth"});
        }
    };

    const backClick = () => {
        if(sliderRef.current) {
            sliderRef.current.scrollBy({ left: -200, behavior: "smooth"});
        }
    };

    return (
        <Container openMenu={openMenu}>
            <SliderButtons onClick={backClick} aria-label= "Voltar">
                <ButtonIcon alt = "ícone voltar" src={BackIcon} />
            </SliderButtons>
            <Slider ref = {sliderRef}>
                <SliderContent>
                    {CategoryButtons.map((button,index)=>(
                        <Button 
                        onClick={() => handleCategoryClick(button.id)}
                        key={index}
                        className={activeCategory === button.id ? "active" : ""}
                        >
                            {button.name}

                        </Button>
                    ))}
                </SliderContent>
            </Slider>
            <SliderButtons onClick = {nextClick} aria-label ="Próximo">
                <ButtonIcon alt="ícone próximo" src={NextIcon} />
            </SliderButtons>
        </Container>
    )

}

export default Chips;


