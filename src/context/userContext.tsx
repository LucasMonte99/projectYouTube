import { createContext, useEffect, useState} from "react";
import api from "../api";


export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login , setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);
    const [userVideos, setUserVideos] = useState([]);
    



    
    const getVideos = async (token: string, user_id: string) => {
      try {
        const response = await api.get(`/videos/get-videos/${user_id}`, { headers: { authorization: token } });
        if (response.status === 200) {
          
          setUserVideos(response.data.videos);
          
          console.log("Resposta da API:", response.data); 
          console.log("Vídeos recebidos:", response.data.videos);
        }
      } catch (error) {
        console.log('erro ao buscar vídeos', error);
      }
    };
    

    const getUser = async (token: string) => {
      api.get('/user/get-user' , {headers: {Authorization: token}}).then(({ data }) => {
        setUser(data.user);
        setLogin(true);
        getVideos(token, data.user.id)
      }).catch((error) =>{
        console.log('usuário não autenticado' , error)
      })
    };
    
    useEffect(() => {
      getUser(token)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        return api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch ((error) =>{
            console.log('Não foi possível fazer o login', error);
            
        })
    }

    const handleCadastro = (name: string, email: string, password: string) => {
        return api.post('/user/sign-up', {name,email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch ((error) =>{
            console.log('Não foi possível fazer o cadastro', error);
            
        })
    }

    const handleCreateUser = async (name: string, email: string, password: string) => {
        try {
          const response = await fetch("http://localhost:4000/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          });
      
          if (!response.ok) {
            throw new Error("Erro ao criar o usuário");
          }
      
          const data = await response.json(); 
          return { status: response.status, data }; 
        } catch (error) {
          console.error(error);
          return { status: 500, message: "Erro interno do servidor" };
        }
      };


      const createVideos = async (token: string, user_id: string, title: string, description: string, thumbnail: string, publishedAt: Date) => {
        try {
          const response = await api.post(`/videos/create-video/${user_id}`, { title, description, thumbnail, publishedAt },
            { headers: { authorization: token } });
          if (response.status === 200) {
            alert('Video enviado com sucesso!');
            getUser(token);
          }
        } catch (error) {
          alert('Não foi possível enviar o vídeo. Tente novamente.');
        }
      }
      
    return (
        <UserContext.Provider value={{
            login,
            user,
            token,
            handleLogin,
            handleLogout,
            handleCadastro,
            handleCreateUser,
            createVideos,
            getVideos,
            userVideos,
        }}>
            { children }
        </UserContext.Provider>
    )
}