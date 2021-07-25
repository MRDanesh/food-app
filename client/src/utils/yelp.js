import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 9-N_MMhJ1YWUu78m1ghcGEwedr1goSFs2R1WsOkgDs8AyNikL0KZomodKSKEn53ob4NEkrbQi2UcWhFmb9hguc-kyhEwcT9SETJEpeBFKAjVb98bS_QGGQgPD6D2X3Yx'
    }
});

