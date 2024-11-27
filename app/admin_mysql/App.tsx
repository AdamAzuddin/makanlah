import react from 'react';
import axios from 'axios';
import { useState };

function App(){
    const [post, setPost] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
        address: '',
        money: ''
    })

    const handleInput = (e) => {
        setPost({...post,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/api/', post)
            .then(response =>{
                console.log('Variable sent to backend:', response.data);
            })
            .catch(error =>{
                console.error('Error sending variable to backend:', error);
            }
        );
    }
}
