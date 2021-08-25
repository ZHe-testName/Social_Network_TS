import axios from "axios";

//axios.create - воспомагательная функция котроая возвращает екземпляр обьъкта 
//в котором можно задать базовые параметры запроса
const instance = axios.create({
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

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10){
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            //этот then нужен чтобы даавть презентационной компоненте тольку нужые ей данные
            .then(responce => responce.data);
    },

    userSubscribeSwitch (followed: boolean, userId: number){
        return followed 
            ? instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
                .then(responce => responce.data.resultCode)
            : instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
                .then(responce => responce.data.resultCode); 
    },
};