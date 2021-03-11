// import { verAutenticacion } from './configFirebase.js'

export const home = `
<div id='home-mobile' class='me-mobile'>
 <header class='container-home-head'>
     <img class='icon-home-head' src='../assets/burger.png' alt='menu'>
     <img class='logo-home' src='../assets/coffehouseletras-01.png' alt='Logo Coffee House'>
     <div class='div-search-head'>
         <img class='icon-home-head' src='../assets/search.png' alt='buscar'>
     </div>
 </header>
 <main class='container-me-main'>
    <section class='container-posts'>
        <div class='div-photo-profile'>
            <img id='img-profile' src='../assets/withoutProfile.png'>
            <h3 id='name-user'> </h3>
        </div>
        <div class='container-img'>
            <img class='img-post' src='../assets/cafeImg.jpg'>
        </div>
        <div class='container-icons-post'>
            <div class='icon-left'>
                <span class='counter' id='counter'>200</span>
                <button class='btn-icons'> <img id='icon-likes' class='icons-posts' src='../assets/Groupcuplike2.png'> </button>
                <button class='btn-icons'> <img id='icon-comments' class='icons-posts' src='../assets/comment-icon.png'> </button>
            </div>
            <div class='icon-right'>
                <button class='btn-icons'> <img id='icon-trash' class='icons-posts' src='../assets/trash-icon.png'> </button>
                <button class='btn-icons'> <img id='icon-edit' class='icons-posts' src='../assets/write-icon.png'> </button>
                <button class='btn-icons'> <img class='icons-posts' src='../assets/favorite-icon.png'> </button>
            </div>
        </div>
        <section class='section-posts' id='section-post-home'>
        </section>
        <section class='section-posts-second'>
            <div class='div-comments'>
                <img class='photo-friend' src='../assets/withoutProfile.png'>
                <div class="comments-mobile"><p></p></div>
            </div>
            <div class='div-comments'>
                <img class='photo-friend' src='../assets/withoutProfile.png'>
                <div class="comments-mobile"><p></p></div>
            </div>
            <div class="container-counter">
                <p class='counter-comments'>60 comentarios</p>
                <form class='form-comments'>
                <input class='post-comment' placeholder='Comenta algo'>
                <button id='send-comment' class='btn-icons'> <img class='icons-posts' src='../assets/send-icon.png'> </button>
                </form>
            </div>
        </section>
    </section>
 </main>
 <footer class="footer-mobile">
     <div class='container-navigation'>
         <img class='icon-home' src='../assets/calendar.png' alt='icon-muro'>
         <img class='icon-home' src='../assets/friends.png' alt='icon-friends'>
         <img class='icon-home' src='../assets/popular.png' alt='icon-popular'>
         <img class='icon-home' src='../assets/me.png' alt='icon-me'>
     </div>
 </footer>
</div>
`;

// <div classs='principal-container' id='home-desktop'>
// <header class='header-desktop'>
// <div class='logo-desktop'>
//   <img src='./assets/coffeehousesmall-01.png' alt='Logo'>
// </div>
// <div>
// <div class='container-navigation-desktop'>
//   <img class='icon-home-desktop' src='../assets/calendar.png' alt='icon-muro' />
//   <img class='icon-home-desktop' src='../assets/friends.png' alt='icon-friends' />
//   <img class='icon-home-desktop' src='../assets/popular.png' alt='icon-popular' />
//   <img class='icon-home-desktop' src='../assets/me.png' alt='icon-me' />
// </div>
// </div>
// <div class='container-search-desktop'>
//   <form>
//     <input class='search-desktop' type='text' placeholder='Buscar'/>
//   </form>
// </div>
// </header>
// <main class='main-desktop'>
// <div class='menu-desktop'>
//   <nav class='nav-desktop'>
//     <ul><li>Angela Gomez</li></ul>
//     <ul><li>Ver tu perfil</li></ul>
//     <ul><li>Buscar amigos</li></ul>
//     <ul><li>Guardado</li></ul>
//     <ul><li>Cafeterias cerca</li></ul>
//     <ul><li>Ayuda y soporte técnico</li></ul>
//     <ul><li>Configuracion y Privacidad</li></ul>
//     <ul><li><a href='#'>Cerrar sesión</a></li></ul>
//   </nav>
//   <div class='img-menu-desktop'><img src='../assets/pie Cafe.png' alt='coffee' /></div>
// </div>
// <div class='container-me-desktop'>
//   <section class='container-posts-desktop'>
//       <div class='div-photo-profile-desktop'>
//           <img id='img-profile-desktop' src='../assets/withoutProfile.png'>
//           <h3 id='name-user'> </h3>
//       </div>
//   <div class='container-img-desktop'> 
//       <figure class='img-post-desktop'><img src='../assets/image-uno.jpg'></figure>
//       <figure class='img-post-desktop'><img src='../assets/image-dos.jpg'></figure>
//       <figure class='img-post-desktop'><img src='../assets/image-tres.jpg'></figure>
//   </div>
//   <div class='container-icons-post-desktop'>
//       <div class='icon-left-desktop'>
//           <span class='counter-desktop' id='counter'>200</span>   
//           <button class='btn-icons-desktop'> <img id='icon-likes' class='icons-posts-desktop' src='../assets/Groupcuplike2.png'> </button>
//           <button class='btn-icons-desktop'> <img id='icon-comments' class='icons-posts-desktop' src='../assets/comment-icon.png'> </button>
//       </div>
//       <div class='icon-right-desktop'>
//           <button class='btn-icons-desktop'> <img id='icon-trash' class='icons-posts-desktop' src='../assets/trash-icon.png'> </button>
//           <button class='btn-icons-desktop'> <img id='icon-edit' class='icons-posts-desktop' src='../assets/write-icon.png'> </button>
//           <button class='btn-icons-desktop'> <img class='icons-posts-desktop' src='../assets/favorite-icon.png'> </button>
//       </div>
//   </div>
//   <section class='section-posts-desktop'>
//       <div class='myPost-desktop'>
//       <p>Este es un comentario de mi post acerca de mi experiencia con algunas cafeterías de la ciudad en donde vivio.
//       Mi lugar favorito para probar café en la cafetería Kayrom, que se encuentra a unos paso del centro historico</p>
//       </div>
//       <div class='div-comments-desktop'>
//           <img class='photo-friend-desktop' src='../assets/withoutProfile.png'>
//           <div class='first-comment-desktop'>
//           </div>
//       </div>
//       <div class='div-comments-desktop'>
//           <img class='photo-friend-desktop' src='../assets/withoutProfile.png'>
//           <div class='second-comment-desktop'>
//       </div>
//       </div>
//       <p class='counter-comments-desktop'>60 comentarios</p>
//       <form class='form-comments-desktop'>
//           <input class='post-comment-desktop' placheholder='Comenta algo'>
//           <button id='send-comment' class='send-submit-desktop'> Enviar </button>
//       </form>
//   </section>
//   </section>
// </div>
// <aside class='aside-desktop'>
//   <figure class='adds-desktop'><img  src='./assets/add-uno.jpg' alt='anuncio' /></figure>
//   <figcaption>Ir al sitio</figcaption>
//   <figure class='adds-desktop'><img  src='./assets/add-dos.jpg' alt='anuncio' /></figure>
//   <figcaption>Ir al sitio</figcaption>
//   <figure class='adds-desktop'><img src='./assets/add-tres.jpg' alt='anun' /></figure>
//   <figcaption>Ir al sitio</figcaption>
// </aside>
// </main>
// </div>
// `;


// window.onload=function(){
//   verAutenticacion();
// }
