import Chips from "../../components/chipComponent";
import VideoComponent from "../../components/videoComponent";
import Shorts from "../shorts";
import { Container } from "./styles";



interface IProps {
   openMenu : boolean;
}

interface TitleProps {
   mudaCor: string;
}

const videos = [
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
   {
      image: '',
      title: 'Angra - Carry On - Live',
      channel: 'Edu Falaschi',
      views: '100 mil',
      time: '4 anos'
   },
]


function Home({ openMenu }: IProps, { mudaCor }: TitleProps ){
   return(
      
      
      <div>
         <Chips />
         <Container openMenu={openMenu}>
            {videos.map((video)=> (
            <VideoComponent video ={video} />
            ))}     
         </Container>
         <Shorts />
      </div>
   
   );
}

export default Home;