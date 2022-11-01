export const regExps = {
    text: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    number: /^[0-9]+$/,
    email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
    phone: /^[(][1-9][0-9]{2}[)]\s[1-9][0-9]{2}[-][0-9]{4}$/,
    password: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])((?=.*\W)|(?=.*_)).*$/,
    decimals: /^[1-9]([0-9]{1,2})?(([,][0-9]{3})+)?[.][0-9]{2}$/,
    code: /^[P][D][-][0-9]{9}$/,
    currency: /^[1-9][0-9.]*$/,
    address: /^(([C][a][l][l][e]\s)|([C][a][r][r][e][r][a]\s))[1-9]([0-9]+)?([a-z])?\s[#]\s[1-9]([0-9]+)?([a-z])?\s[-]\s[1-9]([0-9]+)?$/
}