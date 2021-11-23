//Валидаторы для библиотеки redux-form 
//Функции которые будут вызываться redux-ом
//для валидации форм

//они передаются в нужные поля как атрибут validate
//возвращают либо текст ошибки либо андефайнед
export const required = (value: string) => {
    if (value) return undefined;

    return 'Field is required';
};

//для возможности передачи каких либо входных данных
//можно использовать замыкания на подобее thunkCreators
export const maxLengthCreator = (maxLengthValue: number) => (value: string) => {
    if (value.length > maxLengthValue) return `Only ${maxLengthValue} characters is required`;

    return undefined;
};