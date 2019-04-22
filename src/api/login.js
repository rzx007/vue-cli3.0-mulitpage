import http from './http'

// 登陆验证码
export async function getCaptcha(){
    const res = await http.get('./getCaptcha');
    return res;
}
// 登陆
export async function LoginByUsername(params){
    const res = await http.post('/login',params);
    return res;
}