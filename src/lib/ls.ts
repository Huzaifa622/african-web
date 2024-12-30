
let token: string ;
if(typeof window !== 'undefined') {  
         token = localStorage.getItem("access_token")!;
}

export {token}