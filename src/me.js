import { dataBase, salir } from './configFirebase.js'


export const me = `
<div id='me-mobile' class='me-mobile'>
 <header class='container-home-head'>
     <button id='btn-burger'><img class='icon-home' src='../assets/burger.png' alt='menu'></button>
     <nav class='nav-mobile disabled-menu' id='nav-mobile'>
       <ul><li>Angela Gomez</li></ul>
       <ul><li>Ver tu perfil</li></ul>
       <ul><li>Buscar amigos</li></ul>
       <ul><li>Guardado</li></ul>
       <ul><li>Cafeterias cerca</li></ul>
       <ul><li>Ayuda y soporte técnico</li></ul>
       <ul><li>Configuracion y Privacidad</li></ul>
       <ul><li><a id="logOut-mobile">Cerrar sesión</a></li></ul>
     </nav>
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
        <form class='my-posts' id='my-posts-mobile'>
            <input id='input-post-mobile' class='input-post-mobile' placeholder='Compartir algo'>
            <div class='icons-myPosts'>
                <img class='here-icon icons-posts' src='../assets/here-icon.png'>
                <img class='img-icon icons-posts' src='../assets/image-icon.png'>
                <button id='send-icon-mobile' class='btn-icons'> <img class='send-icon icons-posts' src='../assets/send-icon.png'></button>
            </div>
        </form>
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
        <section class='section-posts' id='section-post-mobile'>
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
         <img id='calendar' class='icon-home' src='../assets/calendar.png' alt='icon-muro'>
         <img class='icon-home' src='../assets/friends.png' alt='icon-friends'>
         <img class='icon-home' src='../assets/popular.png' alt='icon-popular'>
         <img id='me' class='icon-home' src='../assets/me.png' alt='icon-me'>
     </div>
 </footer>
</div>
`;

// export const me = 
// `
// <div classs='principal-container' id='me-desktop'>
//  <header class='header-desktop'>
//    <div class='logo-desktop'>
//      <img src='./assets/coffeehousesmall-01.png' alt='Logo'>
//    </div>
//    <div>
//    <div class='container-navigation-desktop'>
//      <img class='icon-home-desktop' src='../assets/calendar.png' alt='icon-muro' />
//      <img class='icon-home-desktop' src='../assets/friends.png' alt='icon-friends' />
//      <img class='icon-home-desktop' src='../assets/popular.png' alt='icon-popular' />
//      <img class='icon-home-desktop' src='../assets/me.png' alt='icon-me' />
//    </div>
//    </div>
//    <div class='container-search-desktop'>
//      <form>
//        <input class='search-desktop' type='text' placeholder='Buscar'/>
//      </form>
//    </div>
//  </header>
//  <main class='main-desktop'>
//    <div class='menu-desktop'>
//      <nav class='nav-desktop'>
//        <ul><li>Angela Gomez</li></ul>
//        <ul><li>Ver tu perfil</li></ul>
//        <ul><li>Buscar amigos</li></ul>
//        <ul><li>Guardado</li></ul>
//        <ul><li>Cafeterias cerca</li></ul>
//        <ul><li>Ayuda y soporte técnico</li></ul>
//        <ul><li>Configuracion y Privacidad</li></ul>
//        <ul><li><a id="logOut">Cerrar sesión</a></li></ul>
//      </nav>
//      <div class='img-menu-desktop'><img src='../assets/pie Cafe.png' alt='coffee' /></div>
//    </div>
//    <div class='container-me-desktop'>
//      <section class='container-posts-desktop'>
//          <div class='div-photo-profile-desktop'>
//              <img id='img-profile-desktop' src='../assets/withoutProfile.png'>
//              <h3 id='name-user'> </h3>
//          </div>
//          <form class='my-posts-desktop' id='my-posts-desktop'>
//              <input id='input-post-desktop' class='input-post-desktop' placeholder='Compartir algo'>
//              <div class='icons-myPosts-desktop'>
//                  <img class='here-icon-desktop icons-posts-desktop' src='../assets/here-icon.png'>
//                  <img class='img-icon-desktop icons-posts-desktop' src='../assets/image-icon.png'>
//                 <button id='send-icon-desktop' class='btn-icons-desktop'> <img class='send-icon-desktop icons-posts-desktop' src='../assets/send-icon.png'></button>
//              </div>
//          </form>
//      <div class='container-img-desktop'>
//          <figure class='img-post-desktop'><img src='../assets/image-uno.jpg'></figure>
//          <figure class='img-post-desktop'><img src='../assets/image-dos.jpg'></figure>
//          <figure class='img-post-desktop'><img src='../assets/image-tres.jpg'></figure>
//      </div>
//      <div class='container-icons-post-desktop'>
//          <div class='icon-left-desktop'>
//              <span class='counter-desktop' id='counter'>200</span>
//              <button class='btn-icons-desktop'> <img id='icon-likes' class='icons-posts-desktop' src='../assets/Groupcuplike2.png'> </button>
//              <button class='btn-icons-desktop'> <img id='icon-comments' class='icons-posts-desktop' src='../assets/comment-icon.png'> </button>
//          </div>
//          <div class='icon-right-desktop'>
//              <button class='btn-icons-desktop'> <img id='icon-trash' class='icons-posts-desktop' src='../assets/trash-icon.png'> </button>
//              <button class='btn-icons-desktop'> <img id='icon-edit' class='icons-posts-desktop' src='../assets/write-icon.png'> </button>
//              <button class='btn-icons-desktop'> <img class='icons-posts-desktop' src='../assets/favorite-icon.png'> </button>
//          </div>
//      </div>
//      <section class='section-posts-desktop'>
//          <div class='myPost-desktop'>
//          <p>Este es un comentario de mi post acerca de mi experiencia con algunas cafeterías de la ciudad en donde vivio.
//          Mi lugar favorito para probar café en la cafetería Kayrom, que se encuentra a unos paso del centro historico</p>
//          </div>
//          <div class='div-comments-desktop'>
//              <img class='photo-friend-desktop' src='../assets/withoutProfile.png'>
//              <div class='first-comment-desktop'>
//              </div>
//          </div>
//          <div class='div-comments-desktop'>
//              <img class='photo-friend-desktop' src='../assets/withoutProfile.png'>
//              <div class='second-comment-desktop'>
//          </div>
//          </div>
//          <p class='counter-comments-desktop'>60 comentarios</p>
//          <form class='form-comments-desktop'>
//              <input class='post-comment-desktop' placheholder='Comenta algo'>
//              <button id='send-comment-desktop' class='send-submit-desktop'> Enviar </button>
//          </form>
//      </section>
//      </section>
//    </div>
//    <aside class='aside-desktop'>
//      <figure class='adds-desktop'><img  src='./assets/add-uno.jpg' alt='anuncio' /></figure>
//      <figcaption>Ir al sitio</figcaption>
//      <figure class='adds-desktop'><img  src='./assets/add-dos.jpg' alt='anuncio' /></figure>
//      <figcaption>Ir al sitio</figcaption>
//      <figure class='adds-desktop'><img src='./assets/add-tres.jpg' alt='anun' /></figure>
//      <figcaption>Ir al sitio</figcaption>
//    </aside>
//  </main>
// </div>
// `

//--------Mobile---------//
let editStatus = false;
let idMob = "";
const savePost = (inputPostMob) => {
  dataBase.collection("posts").doc().set({
    inputPostMob,
  });
};
const getPost = (id) => dataBase.collection("posts").doc(id).get();
const onGetPosts = (callback) =>
  dataBase.collection("posts").onSnapshot(callback);
const deletePost = (id) => dataBase.collection("posts").doc(id).delete();
const updatePost = (id, updatedPost) =>
  dataBase.collection("posts").doc(id).update(updatedPost);
document.addEventListener("DOMContentLoaded", async (e) => {
  const sectionPostMob = document.getElementById("section-post-mobile");
  onGetPosts((querySnapshot) => {
    sectionPostMob.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const publicationMob = doc.data();
      publicationMob.id = doc.id;
      sectionPostMob.innerHTML += `<div class='myPost'>
            <p>${publicationMob.inputPostMob}</p>
        </div>
        <div class='box-icons'>
            <button class='btn-icons icon-trash-mobile'><img data-id='${publicationMob.id}' class='icons-posts' src='../assets/trash-icon.png'></button>
            <button class='btn-icons icon-edit-mobile'> <img data-id='${publicationMob.id}' class='icons-posts' src='../assets/write-icon.png'> </button>
        </div>
        `;
      const btnsTrashMob = document.querySelectorAll(".icon-trash-mobile");
      btnsTrashMob.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await deletePost(e.target.dataset.id);
        });
      });
      const myPostMob = document.getElementById("my-posts-mobile");
      const btnsEditMob = document.querySelectorAll(".icon-edit-mobile");
      btnsEditMob.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const docMob = await getPost(e.target.dataset.id);
          const postMob = docMob.data();
          editStatus = true;
          idMob = docMob.id;
          myPostMob["input-post-mobile"].value = postMob.inputPostMob;
          myPostMob["send-icon-mobile"].innerHTML = `
                <button class='btn-icons icon-edit-mobile'> <img class='icons-posts' src='../assets/write-icon.png'> </button>
                `;
        });
      });
    });
  });
});
document.addEventListener("submit", async (e) => {
  if (e.target.matches("#my-posts-mobile")) {
    const myPostMob = document.getElementById("my-posts-mobile");
    e.preventDefault();
    const inputPostMob = myPostMob["input-post-mobile"];
    console.log(inputPostMob);
    if (!editStatus) {
      await savePost(inputPostMob.value);
    } else {
      await updatePost(idMob, {
        inputPostMob: inputPostMob.value,
      });
      editStatus = false;
      idMob = "";
      myPostMob["send-icon-mobile"].innerHTML = `
            <button id='send-icon-mobile' class='btn-icons'> <img class='send-icon icons-posts' src='../assets/send-icon.png'></button>
            `;
    }
    myPostMob.reset();
    inputPostMob.focus();
  }
});
let editStatusDesk = false;
let idDesk = "";
const savePostDesk = (inputPostDesk) => {
  dataBase.collection("posts").doc().set({
    inputPostDesk,
  });
};
const getPostDesk = (id) => dataBase.collection("posts").doc(id).get();
const onGetPostsDesk = (callback) =>
  dataBase.collection("posts").onSnapshot(callback);
const deletePostDesk = (id) => dataBase.collection("posts").doc(id).delete();
const updatePostDesk = (id, updatedPostDesk) =>
  dataBase.collection("posts").doc(id).update(updatedPostDesk);
document.addEventListener("DOMContentLoaded", async (e) => {
  const sectionPostDesk = document.getElementById("section-post-desktop");
  onGetPostsDesk((querySnapshot) => {
    sectionPostDesk.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const publicationDesk = doc.data();
      publicationDesk.id = doc.id;
      sectionPostDesk.innerHTML += `<div class='myPost-desktop'>
       <p> ${publicationDesk.inputPostDesk}</p></div>
       <div class='icon-right-desktop'>
           <button class='btn-icons-desktop icon-trash-desktop'> <img data-id='${publicationDesk.id}' class='icons-posts-desktop' src='../assets/trash-icon.png'> </button>
           <button class='btn-icons-desktop icon-edit-desktop'> <img data-id='${publicationDesk.id}' class='icons-posts-desktop' src='../assets/write-icon.png'> </button>
       </div>
      `;
      const btnsTrashDesk = document.querySelectorAll(".icon-trash-desktop");
      btnsTrashDesk.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          await deletePostDesk(e.target.dataset.id);
        });
      });
      const myPostDesk = document.getElementById("my-posts-desktop");
      const btnsEditDesk = document.querySelectorAll(".icon-edit-desktop");
      btnsEditDesk.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          const docDesk = await getPostDesk(e.target.dataset.id);
          const postDesk = docDesk.data();
          editStatusDesk = true;
          idDesk = docDesk.id;
          myPostDesk["input-post-desktop"].value = postDesk.inputPostDesk;
          myPostDesk["send-icon-desktop"].innerHTML = `
              <button class='btn-icons-desktop'> <img id='icon-edit' class='icons-posts-desktop' src='../assets/write-icon.png'> </button>
              `;
        });
      });
    });
  });
});
document.addEventListener("submit", async (e) => {
  if (e.target.matches("#my-posts-desktop")) {
    const myPostDesk = document.getElementById("my-posts-desktop");
    e.preventDefault();
    const inputPostDesk = myPostDesk["input-post-desktop"];
    console.log(inputPostDesk);
    if (!editStatusDesk) {
      await savePostDesk(inputPostDesk.value);
    } else {
      await updatePostDesk(idDesk, {
        inputPostDesk: inputPostDesk.value,
      });
      editStatusDesk = false;
      idDesk = "";
      myPostDesk["send-icon-desktop"].innerHTML = `
           <button id='send-icon-desktop' class='btn-icons-desktop'> <img class='send-icon-desktop icons-posts-desktop' src='../assets/send-icon.png'></button>
          `;
    }
    myPostDesk.reset();
    inputPostDesk.focus();
  }
});

document.addEventListener('click', (e) => {
    if (e.target.matches('#calendar')) {
      console.log('Estas en home');
      e.preventDefault();
      onNavigate('/home');
    }
    if (e.target.matches('#me')) {
        console.log('Estas en me');
        e.preventDefault();
        onNavigate('/me');
      }
});

document.addEventListener('click', (e) => {
    if(e.target.matches('#logOut')){
        salir();
        e.preventDefault();
    }
})


// window.onload=function(){
//   verAutenticacion();
// }

//Función para menú hamburguesa

const burger = document.getElementById('btn-burger');

function showMenu(){
const menu = document.getElementById('nav-mobile');
if(menu.classList.contains('disabled-menu')){
  menu.classList.remove('disabled-menu');
  menu.classList.add('enabled-menu');
}else{
  menu.classList.remove('enabled-menu');
  menu.classList.add('disabled-menu');
}
}
burger.addEventListener('click', showMenu);