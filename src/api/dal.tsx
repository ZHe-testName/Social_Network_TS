import axios from "axios";
import { type } from "os";

//axios.create - воспомагательная функция котроая возвращает екземпляр обьъкта 
//в котором можно задать базовые параметры запроса
const instance = axios.create({
    //Вторым параметром на сервер мы отправляем объект настроек запроса
    
    //withCredentials: true означает что мы цепляем куки которые есть в
    //в браузере после авторизации на серваке
    //так как CORS политика запрещает автоматическое йепляние кукисов 
    //при кросдоменном обращенни
    withCredentials: true,
    headers: {
        "API-KEY": "797677fc-71e8-47d3-89ee-972f9e368c32",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0",
});

type RequestItemsType = {
    followed: boolean,
    id: number
    name: string,
    photos: {small: string | null, large: string | null},
    status: string | null,
    uniqueUrlName: string | null,
};

export type GetUsersRequestType = {
    error: string | null,
    items: Array<RequestItemsType>,
    totalCount: number,
};

export type LoginRequestObj = {
    email: string,
    password: string,
    rememberMe: boolean,
};

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            //этот then нужен чтобы даавть презентационной компоненте толькo нужые ей данные
            .then(responce => responce.data);
    },

    userSubscribeSwitch (followed: boolean, userId: number){
        return followed 
            ? instance.delete(`/follow/${userId}`)
                .then(responce => responce.data.resultCode)
            : instance.post(`/follow/${userId}`)
                .then(responce => responce.data.resultCode); 
    },
};

export const profileAPI = {
    getProfile (userId: string){
        return instance.get(`/profile/${userId}`)
                        .then(responce => responce.data);
    },

    getProfileStatus (userId: string){
        return instance.get(`/profile/status/${userId}`)
                        .then(responce => responce.data);
    },

    setProfileStatus (newStatus: string){
        return instance.put(`/profile/status`, {status: newStatus})
                        .then(responce => responce.data);
    },

    putProfilePhoto (photoURL: any){
        console.log(photoURL);
        return instance.put(`/profile/photo`, {image: photoURL})
                        .then(responce => responce.data);
    },
};

export const authAPI = {
    getAuthData (){
        return instance.get(`/auth/me`)
                        .then(responce => responce.data);
    },

    login (loginData: LoginRequestObj){
        return instance.post(`/auth/login`, {...loginData});
    },

    logout (){
        return instance.delete(`/auth/login`)
                        .then(responce => responce.data.resultCode);
    },
};