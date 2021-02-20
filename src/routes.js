import { home } from "./home.js"
import{register} from "./register.js"

export const ruotes = {
    '/' : home,
    '/register' : register,
}

export const rootDiv = document.getElementById("root");
rootDiv.innerHTML = ruotes[window.location.pathname];

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = ruotes[pathname]
}


